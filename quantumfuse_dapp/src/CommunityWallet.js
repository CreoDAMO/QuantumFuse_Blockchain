import React from 'react';

const CommunityWallet = () => (
    <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Community Wallet</h2>
        <div className="neumorphic p-6">
            <h3 className="text-xl font-bold mb-4">Manage Community Funds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="font-bold">Current Balance:</p>
                    <p className="text-blue-500">1,000,000 QFC</p>
                </div>
                <div>
                    <p className="font-bold">Pending Proposals:</p>
                    <p className="text-blue-500">5</p>
                </div>
            </div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
                Create New Proposal
            </button>
        </div>
    </section>
);

export default CommunityWallet;
