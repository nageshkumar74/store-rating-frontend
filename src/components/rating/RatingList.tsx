import React from 'react';
import RatingForm from './RatingForm';

const RatingList = ({ ratings }: {ratings: any[]}) => (
    <div>
        {ratings.map(rating => (
            <div key={rating.id}>
                <p>Rating: {rating.value}</p>
                <p>User: {rating.userId}</p>
                <p>Store: {rating.storeId}</p>
            </div>
        ))}
        <RatingForm />
    </div>
);

export default RatingList;
