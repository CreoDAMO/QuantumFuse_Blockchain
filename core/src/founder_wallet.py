import os
import json
import hashlib
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives import serialization
from cryptography.exceptions import InvalidSignature
from typing import Dict

class Wallet:
    def __init__(self, private_key_bytes: bytes):
        self.private_key = Ed25519PrivateKey.from_private_bytes(private_key_bytes)
        self.public_key = self.private_key.public_key()

    def sign_transaction(self, transaction: Dict) -> str:
        message = json.dumps(transaction, sort_keys=True).encode('utf-8')
        signature = self.private_key.sign(message)
        return signature.hex()

    def verify_transaction(self, transaction: Dict, signature: str) -> bool:
        try:
            message = json.dumps(transaction, sort_keys=True).encode('utf-8')
            signature_bytes = bytes.fromhex(signature)
            self.public_key.verify(signature_bytes, message)
            return True
        except InvalidSignature:
            return False

def create_sgx_enclave():
    # Placeholder for SGX enclave initialization
    print("SGX enclave created")
    return True

# Usage example:
if create_sgx_enclave():
    wallet = generate_wallet()
    tx = {"sender": "founder", "recipient": "community_wallet", "amount": 500}
    signature = wallet.sign_transaction(tx)
    print("Signature valid:", wallet.verify_transaction(tx, signature))
