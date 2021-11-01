import React from 'react';

const ReviewItem = (props) => {
    const { handleRemove } = props;
    const { key, img, ride, price, description } = props.service;
    return (
        <div>
            <h4 className="product-name">{ride}</h4>
            <p>Price: {price}</p>
            <img src={img} alt="" />
            <p>Description: {description}</p>
            <button onClick={() => handleRemove(key)} className="w-50 btn btn-primary mt-3">Remove</button>
        </div>
    );
};

export default ReviewItem;