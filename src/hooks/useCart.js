import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakeDb';

const useCart = services => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        const keys = Object._id(savedCart);
        fetch('', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then((res) => res.json())
            .then(services => {
                if (services.length) {
                    const savedCart = getStoredCart();
                    const storedCart = [];
                    for (const key in savedCart) {
                        const addedProduct = services.find(service => service.key === key);
                        if (addedProduct) {
                            // set quantity
                            const quantity = savedCart[key];
                            addedProduct.quantity = quantity;
                            storedCart.push(addedProduct);
                        }
                    }
                    setCart(storedCart);
                }
            });


    }, [services]);

    return [cart, setCart];
}

export default useCart;