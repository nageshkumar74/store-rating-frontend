import React, { useState } from 'react';
import { registerUser } from '../services/api';

const RegisterForm = () => {
    const [form, setForm] = useState({ name:'', email:'', password:'', address:'' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerUser(form);
            alert('Registration successful!');
        } catch {
            alert('Registration failed.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <input name="address" placeholder="Address" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
