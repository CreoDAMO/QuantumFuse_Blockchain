// src/components/AdvancedFeatures.js
import React from 'react';

const AdvancedFeatures = () => (
    <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neumorphic p-6">
                <h3 className="text-xl font-bold mb-4">AI-Driven Analytics</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mr-2">
                    Run Predictive Analytics
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                    Detect Anomalies
                </button>
            </div>
            <div className="neumorphic p-6">
                <h3 className="text-xl font-bold mb-4">Quantum Computing Simulation</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                    Run Quantum Simulation
                </button>
            </div>
            <div className="neumorphic p-6">
                <h3 className="text-xl font-bold mb-4">Network Visualization</h3>
                <div id="network-viz" className="w-full h-48 bg-gray-200 rounded"></div>
            </div>
        </div>
    </section>
);

export default AdvancedFeatures;
