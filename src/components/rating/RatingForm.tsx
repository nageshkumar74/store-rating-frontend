import React, { useState } from 'react';

const RatingForm = () => {
    const [value, setValue] = useState(0);
    const [userId, setUserId] = useState('');
    const [storeId, setStoreId] = useState('');

    // Implement submit logic to your backend here
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Submit your rating implementation here.');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" min="1" max="5" value={value} onChange={(e) => setValue(parseInt(e.target.value))} required />
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" required />
            <input type="text" value={storeId} onChange={(e) => setStoreId(e.target.value)} placeholder="Store ID" required />
            <button type="submit">Submit Rating</button>
        </form>
    );
};

export default RatingForm;
