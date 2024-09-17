import pytest
from quantumfuse_core_main import ShardedBlockchain

def test_blockchain_initialization():
    blockchain = ShardedBlockchain(num_shards=3)
    assert len(blockchain.shards) == 3
