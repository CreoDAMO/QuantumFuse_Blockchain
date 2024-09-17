import React from 'react';

const FusionReactor = () => (
    <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Fusion Reactor Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="neumorphic p-6">
                <h3 className="text-xl font-bold mb-4">Reactor Status</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-bold">Energy Output:</p>
                        <p className="text-blue-500">1000.0 MJ</p>
                    </div>
                    <div>
                        <p className="font-bold">Core Temperature:</p>
                        <p className="text-blue-500">50,000,000 K</p>
                    </div>
                    <div>
                        <p className="font-bold">Impurity Level:</p>
                        <p className="text-blue-500">0.01</p>
                    </div>
                    <div>
                        <p className="font-bold">Stability Factor:</p>
                        <p className="text-blue-500">1.0</p>
                    </div>
                </div>
            </div>
            <div className="neumorphic p-6">
                <h3 className="text-xl font-bold mb-4">Reactor Controls</h3>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300 mr-2">
                    Generate Energy
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mr-2">
                    Monitor Plasma
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
                    Optimize Performance
                </button>
            </div>
        </div>
    </section>
);

export default FusionReactor;
