import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu ekleyin
import '../css/SignUp.css'; // Import the CSS file

function SignUp() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // useNavigate hook'unu kullanın

    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log("Submitting signup form with:", { name, password, email });
        try {
            const response = await axios.post('http://localhost:3000/user/signup', {
                name,
                password,
                email
            });
            console.log("Response from server:", response.data);
            setMessage(response.data.message);
            navigate('/login'); // SignUp başarılı olduğunda yönlendir
        } catch (error) {
            console.error("Error during signup:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setMessage(error.response.data.message);
            } else {
                setMessage("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default SignUp;
