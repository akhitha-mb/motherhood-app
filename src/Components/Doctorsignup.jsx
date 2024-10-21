import React, { useState } from 'react';
import axios from 'axios';
import './Doctorsignup.css';

const Doctorsignup = () => {
    // State hooks for form fields
    const [name, setName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [qualification, setQualification] = useState('');
    const [experience, setExperience] = useState('');
    const [hospital, setHospital] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // Form submission handler
    const handleSignUp = (e) => {
        e.preventDefault();
        const doctorData = {
            name,
            specialization,
            qualification,
            experience,
            hospital,
            phoneNumber
        };
        console.log('Doctor Data:', doctorData);

        // Call function to handle form submission logic, e.g., API call
        handleSubmit(doctorData);
    };

    // Function to handle form data submission
    const handleSubmit = (data) => {
        console.log('Handling submitted data:', data);
        axios.post('/api/doctor-signup', data)
            .then(response => {
                console.log('Form successfully submitted:', response.data);
                // Handle success (e.g., show a success message or redirect)
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                // Handle error (e.g., show an error message)
            });
    };

    return (
        <div className="signup-container">
            <h2>Doctor Sign Up</h2>
            <form onSubmit={handleSignUp}>
                
                {/* Name Input */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Specialization Input */}
                <div className="form-group">
                    <label htmlFor="specialization">Specialization:</label>
                    <input
                        type="text"
                        id="specialization"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        placeholder="Enter your specialization"
                        required
                    />
                </div>

                {/* Qualification Input */}
                <div className="form-group">
                    <label htmlFor="qualification">Qualification:</label>
                    <input
                        type="text"
                        id="qualification"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        placeholder="Enter your qualification"
                        required
                    />
                </div>

                {/* Experience Input */}
                <div className="form-group">
                    <label htmlFor="experience">Experience (in years):</label>
                    <input
                        type="number"
                        id="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        placeholder="Enter your experience"
                        required
                    />
                </div>

                {/* Working Hospital Name Input */}
                <div className="form-group">
                    <label htmlFor="hospital">Working Hospital Name:</label>
                    <input
                        type="text"
                        id="hospital"
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                        placeholder="Enter your hospital name"
                        required
                    />
                </div>

                {/* Phone Number Input */}
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                {/* Submit Button */}
                <center><button type="submit" className="btn">Sign Up</button></center>
            </form>
        </div>
    );
};

export default Doctorsignup;
