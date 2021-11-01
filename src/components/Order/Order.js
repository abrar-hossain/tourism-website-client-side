import React from 'react';

const Order = (props) => {
    const { cart } = props;
    console.log(cart.length);
    return (
        <div>
            <h4>{cart.length}</h4>
        </div>
    );
};

export default Order;