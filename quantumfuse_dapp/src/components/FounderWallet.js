import React from 'react';

const FounderWallet = () => (
    <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Founder Wallet</h2>
        <div className="neumorphic p-6">
            <h3 className="text-xl font-bold mb-4">Secure Founder Transactions</h3>
            <p>Manage founder transactions with enhanced security using SGX enclaves.</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
                Access Founder Wallet
            </button>
        </div>
    </section>
);

export default FounderWallet;
