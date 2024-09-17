import React from 'react';

const ARVRXRSection = () => (
    <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">AR/VR/XR Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="neumorphic p-6">
                <h3 className="text-xl font-bold mb-4">Immersive Blockchain Experience</h3>
                <p>Explore the QuantumFuse blockchain in a fully immersive AR/VR/XR environment.</p>
                <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300">
                    Launch AR/VR/XR Mode
                </button>
            </div>
            <div className="neumorphic p-6">
                <h3 className="text-xl font-bold mb-4">Quantum Magnetic Field Simulation</h3>
                <p>Experience the cutting-edge quantum magnetic field simulation in our AR/VR/XR environment.</p>
                <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300">
                    Start Simulation
                </button>
            </div>
        </div>
    </section>
);

export default ARVRXRSection;
