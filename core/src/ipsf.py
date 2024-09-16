import hashlib
import json
import time
from collections import deque
import ipfshttpclient

# Transaction and MultiSigTransaction classes
class Transaction:
    def __init__(self, sender: str, receiver: str, amount: int, signature: str):
        self.sender = sender
        self.receiver = receiver
        self.amount = amount
        self.signature = signature

class MultiSigTransaction:
    def __init__(self, sender: str, receivers: deque, amount: int, signatures: deque):
        self.sender = sender
        self.receivers = receivers
        self.amount = amount
        self.signatures = signatures

    def is_valid(self):
        return len(self.signatures) >= len(self.receivers) // 2 + 1

# Block Class
class Block:
    def __init__(self, index: int, timestamp: float, transactions: deque, previous_hash: str):
        self.index = index
        self.timestamp = timestamp
        self.transactions = transactions
        self.previous_hash = previous_hash
        self.nonce = 0
        self.hash = self.calculate_hash()

    def calculate_hash(self) -> str:
        block_string = f"{self.index}{self.timestamp}{[tx.__dict__ for tx in self.transactions]}{self.previous_hash}{self.nonce}"
        return hashlib.sha256(block_string.encode()).hexdigest()

    def mine_block(self, difficulty: int):
        target = "0" * difficulty
        while self.hash[:difficulty] != target:
            self.nonce += 1
            self.hash = self.calculate_hash()

# Proposal and Governance Classes
class Proposal:
    def __init__(self, proposal_id: int, title: str, description: str, options: deque, deadline: float):
        self.id = proposal_id
        self.title = title
        self.description = description
        self.options = options
        self.votes = {}
        self.deadline = deadline

class Governance:
    def __init__(self):
        self.proposals = deque()
        self.proposal_count = 0

    def create_proposal(self, title: str, description: str, options: deque, deadline: float):
        proposal = Proposal(self.proposal_count, title, description, options, deadline)
        self.proposals.append(proposal)
        self.proposal_count += 1

    def vote(self, proposal_id: int, option: str, voter: str):
        proposal = next((p for p in self.proposals if p.id == proposal_id), None)
        if proposal:
            if voter in proposal.votes:
                print("Voter has already voted.")
            else:
                proposal.votes[option] = proposal.votes.get(option, 0) + 1
                proposal.votes[voter] = 1
        else:
            print("Proposal not found.")

    def get_results(self, proposal_id: int):
        proposal = next((p for p in self.proposals if p.id == proposal_id), None)
        return proposal.votes if proposal else None

# Smart Contract Class
class SmartContract:
    def __init__(self, contract_id: str, code: str, owner: str):
        self.id = contract_id
        self.code = code
        self.owner = owner
        self.state = {}

    def execute(self, input_data: str):
        self.state["last_input"] = input_data
        return f"Executed with input: {input_data}"

# Blockchain Class
class QuantumFuseBlockchain:
    def __init__(self, difficulty: int, mining_reward: int):
        self.blocks = deque()
        self.difficulty = difficulty
        self.pending_transactions = deque()
        self.multisig_transactions = deque()
        self.mining_reward = mining_reward
        self.staking_pool = {}
        self.governance = Governance()
        self.smart_contracts = {}
        self.add_genesis_block()

    def add_genesis_block(self):
        genesis_block = Block(0, time.time(), deque(), "0")
        self.blocks.append(genesis_block)

    def add_transaction(self, transaction: Transaction):
        self.pending_transactions.append(transaction)

    def add_multisig_transaction(self, transaction: MultiSigTransaction):
        if transaction.is_valid():
            self.multisig_transactions.append(transaction)

    def mine_pending_transactions(self, reward_address: str):
        reward_transaction = Transaction("0", reward_address, self.mining_reward, "")
        self.pending_transactions.append(reward_transaction)

        previous_block = self.blocks[-1]
        new_block = Block(len(self.blocks), time.time(), self.pending_transactions.copy(), previous_block.hash)
        new_block.mine_block(self.difficulty)
        self.blocks.append(new_block)
        self.pending_transactions.clear()

    def get_balance(self, address: str):
        balance = 0
        for block in self.blocks:
            for transaction in block.transactions:
                if transaction.sender == address:
                    balance -= transaction.amount
                if transaction.receiver == address:
                    balance += transaction.amount
        return balance

    def deploy_smart_contract(self, contract: SmartContract):
        self.smart_contracts[contract.id] = contract

    def execute_smart_contract(self, contract_id: str, input_data: str):
        contract = self.smart_contracts.get(contract_id)
        if contract:
            return contract.execute(input_data)
        return "Smart contract not found"

    def store_data_on_ipfs(self, data: str):
        try:
            client = ipfshttpclient.connect()
            res = client.add_str(data)
            return res
        except Exception as e:
            return f"Failed to store data on IPFS: {e}"

# Example Usage
if __name__ == "__main__":
    blockchain = QuantumFuseBlockchain(4, 100)
    
    # Add a new transaction
    tx = Transaction("Alice", "Bob", 50, "signature")
    blockchain.add_transaction(tx)
    
    # Mine the transaction
    blockchain.mine_pending_transactions("Miner")
    
    # Deploy and execute a smart contract
    contract = SmartContract("contract_1", "Sample contract code", "Alice")
    blockchain.deploy_smart_contract(contract)
    print(blockchain.execute_smart_contract("contract_1", "Sample input"))
    
    # Store data on IPFS
    result = blockchain.store_data_on_ipfs("Hello, IPFS!")
    print("Stored data on IPFS with hash:", result)
