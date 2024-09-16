import os
import json
import hashlib
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives import serialization
from cryptography.exceptions import InvalidSignature
from typing import List, Dict

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

    def save_to_file(self, file_path: str):
        with open(file_path, 'w') as f:
            f.write(self.private_key.private_bytes(
                encoding=serialization.Encoding.PEM,
                format=serialization.PrivateFormat.PKCS8,
                encryption_algorithm=serialization.NoEncryption()
            ).hex())

    @staticmethod
    def load_from_file(file_path: str) -> 'Wallet':
        with open(file_path, 'r') as f:
            private_key_bytes = bytes.fromhex(f.read())
            return Wallet(private_key_bytes)

def generate_wallet():
    private_key = Ed25519PrivateKey.generate()
    wallet = Wallet(private_key.private_bytes(
        encoding=serialization.Encoding.Raw,
        format=serialization.PrivateFormat.Raw,
        encryption_algorithm=serialization.NoEncryption()
    ))
    return wallet

# Usage example:
wallet = generate_wallet()
tx = {"sender": "alice", "recipient": "bob", "amount": 100}
signature = wallet.sign_transaction(tx)
print("Signature valid:", wallet.verify_transaction(tx, signature))
