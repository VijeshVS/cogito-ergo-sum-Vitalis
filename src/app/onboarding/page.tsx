'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function Onboarding() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        age: '',
        weight: '',
        height: '',
        bloodGroup: '',
    });
    const router = useRouter();

    const nextStep = () => {
        if (step < 6) {
            setStep(step + 1);
        } else {
            router.push('/some-other-page');
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Head>
                <title>Onboarding</title>
            </Head>

            <div className="flex items-center justify-center h-screen bg-neutral-800 text-white">
                <div className="flex flex-col items-center w-full max-w-md p-8 bg-neutral-900 rounded-lg shadow-lg transform transition-all duration-300">

                    {/* Progress Bar */}
                    <div className="flex justify-between w-full mb-10">
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <div
                                key={index}
                                className="h-1 w-1/6 bg-neutral-700 rounded transition-all duration-500"
                                style={{
                                    backgroundImage: step >= index ? 'linear-gradient(to right, #3b82f6, #2563eb)' : 'none',
                                    backgroundSize: '200% 100%',
                                    backgroundPosition: step === index ? 'left' : 'right',
                                }}
                            ></div>
                        ))}
                    </div>

                    <h1 className="text-3xl font-semibold mb-6">Welcome! Let's get you set up</h1>

                    {/* Form Fields */}
                    <div className="w-full space-y-6">
                        {step === 1 && (
                            <div className="flex flex-col space-y-2">
                                <label className="text-lg">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                />
                            </div>
                        )}
                        {step === 2 && (
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-lg">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label className="text-lg">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        className="p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                    />
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="flex flex-col space-y-2">
                                <label className="text-lg">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="Enter your age"
                                    className="p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                />
                            </div>
                        )}
                        {step === 4 && (
                            <div className="flex flex-col space-y-2">
                                <label className="text-lg">Weight (kg)</label>
                                <input
                                    type="number"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    placeholder="Enter your weight in kg"
                                    className="p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                />
                            </div>
                        )}
                        {step === 5 && (
                            <div className="flex flex-col space-y-2">
                                <label className="text-lg">Height (cm)</label>
                                <input
                                    type="number"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    placeholder="Enter your height in cm"
                                    className="p-3 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                />
                            </div>
                        )}
                        {step === 6 && (
                            <div className="flex flex-col space-y-2">
                                <label className="text-lg">Blood Group</label>
                                <select
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                    className="p-3 rounded bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                >
                                    <option value="" disabled>Select your blood group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between w-full mt-10 space-x-4">
                        <button
                            onClick={prevStep}
                            disabled={step === 1}
                            className={`px-5 py-3 rounded-lg shadow-lg text-lg ${step === 1
                                    ? 'bg-neutral-600 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1'
                                }`}
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextStep}
                            className="px-5 py-3 bg-blue-600 rounded-lg shadow-lg text-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {step < 6 ? 'Next' : 'Finish'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
