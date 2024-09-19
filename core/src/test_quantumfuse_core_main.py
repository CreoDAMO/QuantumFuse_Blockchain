import pytest
from quantumfuse_core_main import (
    ShardedBlockchain, Block, CrossShardTransaction, ProofOfStake, ProofOfAuthority,
    ProxyContract, SmartContract, Governance, StakingPool
)
import time

@pytest.fixture
def blockchain():
    return ShardedBlockchain(num_shards=2)

@pytest.fixture
def governance(blockchain):
    return Governance(blockchain)

def test_shard_creation(blockchain):
    initial_shard_count = len(blockchain.shards)
    blockchain.shard_manager.adjust_shards()
    assert len(blockchain.shards) > initial_shard_count, "Shard creation failed"

def test_add_block_to_shard(blockchain):
    shard = blockchain.get_shard(0)
    prev_block_hash = shard.get_latest_block().hash
    blockchain.mine_pending_transactions("Miner", shard_id=0)
    assert shard.get_latest_block().previous_hash == prev_block_hash, "Block addition to shard failed"

def test_cross_shard_transaction(blockchain):
    tx = CrossShardTransaction(from_shard=0, to_shard=1, from_address="Alice", to_address="Bob", amount=10, token="QFC")
    tx.execute(blockchain)
    assert tx.status == "completed", "Cross-shard transaction failed"

def test_insufficient_balance_cross_shard_transaction(blockchain):
    with pytest.raises(ValueError, match="Insufficient QFC balance"):
        tx = CrossShardTransaction(from_shard=0, to_shard=1, from_address="Alice", to_address="Bob", amount=1000, token="QFC")
        tx.execute(blockchain)

def test_governance_proposal_consensus_switch(governance):
    governance.propose("proposal_1", {"type": "consensus_change", "new_mechanism": "PoA"})
    governance.vote("proposal_1", "Alice", True)
    governance.tally_votes("proposal_1")
    assert governance.blockchain.consensus.mechanism == "PoA", "Consensus mechanism switch failed"

def test_smart_contract_execution():
    contract = SmartContract(id="contract_1", code="sample_code", owner="Alice")
    proxy = ProxyContract(contract)
    result = proxy.execute("sample input")
    assert result == "Executed contract contract_1 with input sample input", "Smart contract execution failed"
    new_contract = SmartContract(id="contract_2", code="new_code", owner="Alice")
    proxy.update_implementation(new_contract)
    result = proxy.execute("new input")
    assert result == "Executed contract contract_2 with input new input", "Smart contract upgrade failed"

def test_staking_and_rewards(blockchain):
    staking_pool = blockchain.staking_pool
    staking_pool.stake("Validator1", 100)
    staking_pool.stake("Validator2", 50)
    validator = blockchain.consensus.select_validator()
    assert validator in ["Validator1", "Validator2"], "Validator selection failed"

def test_invalid_stake_withdrawal(blockchain):
    staking_pool = blockchain.staking_pool
    staking_pool.stake("Validator1", 100)
    with pytest.raises(ValueError, match="Insufficient stake for withdrawal"):
        staking_pool.withdraw_stake("Validator1", 200)

def test_is_chain_valid(blockchain):
    assert blockchain.is_chain_valid(), "Blockchain validity check failed"
