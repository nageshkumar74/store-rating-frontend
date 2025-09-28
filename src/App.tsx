import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from  '../src/components/Pages/Home';
import Login from '../src/components/Pages/Login';
import Register from '../src/components/Pages/Register';
import Store from '../src/components/Pages/Stores';
import Rating from '../src/components/Pages/Ratings';
import Profile from '../src/components/Pages/Profile';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/stores" element={<Store />} />
            <Route path="/ratings" element={<Rating />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
);

export default App;
