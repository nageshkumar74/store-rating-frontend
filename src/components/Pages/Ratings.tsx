import React, { useEffect, useState } from 'react';
import RatingList from '../rating/RatingList';
import { fetchRatings } from '../services/api';

const Ratings = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        fetchRatings().then(res => setRatings(res.data));
    }, []);

    return (
        <div>
            <h1>Ratings</h1>
            <RatingList ratings={ratings} />
        </div>
    );
};

export default Ratings;
