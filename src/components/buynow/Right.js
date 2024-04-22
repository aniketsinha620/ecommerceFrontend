import { React, useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
const Right = ({ iteam }) => {

    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [iteam])

    const totalAmount = () => {
        let price = 0;
        iteam.map((item) => {
            price = item.price.cost + price
        });
        setPrice(price)
    }
    // pk_test_51P6ULHSAsM77YEhsO4dMfXgTSnMTKXMNCdLrRI4kl52HLEHfRamXt4DgdhBS8rvQbPd593g6V2KeqP73ufOUf4Vu00lc1lzT1S
    // const makePayment = async () => {
    //     try {
    //         const stripe = await loadStripe('pk_test_51P6ULHSAsM77YEhsO4dMfXgTSnMTKXMNCdLrRI4kl52HLEHfRamXt4DgdhBS8rvQbPd593g6V2KeqP73ufOUf4Vu00lc1lzT1S');
    //         const res = await fetch('http://localhost:8000/stripe/create-checkout-session', {
    //             method: "POST",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json"
    //             },
    //             credentials: "include",
    //             body: JSON.stringify({
    //                 iteam // Assuming 'item' is a variable holding the item data
    //             })
    //         });

    //         if (!res.ok) {
    //             throw new Error('Failed to fetch payment session');
    //         }

    //         const session = await res.json();
    //         const result = await stripe.redirectToCheckout({
    //             sessionId: session.id
    //         });

    //         if (result.error) {
    //             console.log(result.error);
    //             throw new Error('Stripe checkout redirect failed');
    //         }
    //     } catch (error) {
    //         console.error('Payment error:', error);
    //         // Handle the error appropriately, e.g., display a user-friendly message
    //     }
    // };


    return <div className='right_buy'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
        <div className="cost_right">
            <p>Your order is eligible for FREE Delivery.</p> <br />
            <span style={{ color: "#565959" }}>Select this option at checkout. Details

            </span>

            <h3>Subtotal ({iteam.length} items): <span style={{ fotnWeight: 700 }}> ₹{price}.00</span></h3>
            <button className='rightbuy_btn' >Process to Buy</button>
            <div className="emi">
                Emi available
            </div>
        </div>
    </div>;
};

export default Right;
