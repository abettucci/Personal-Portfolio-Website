import React from 'react';

const Profile = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Sobre Mí</h2>
            <p className="text-gray-700">Soy un desarrollador web apasionado con experiencia en crear aplicaciones modernas y seguras.</p>
            <p className="text-gray-700">Empleo actual: Desarrollador Frontend en [Tu Empresa]</p>
            <div className="mt-4">
                <h3 className="font-semibold">Conéctame:</h3>
                <div className="flex space-x-4 mt-2">
                    <a href="https://github.com/abettucci" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/abettucci" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
