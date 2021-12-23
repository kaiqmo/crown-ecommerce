import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K9scqLBKRh9ajahfPLiNXauUVnLik2A9UZs3b9WEDcSVVn92URLBo34s1ucnyn1KyAYN9dlSTm6HNgBzxgEtsnx00vGPEriqf';
    
    const onToken = token =>{
        console.log(token);
        alert('Payment DONE');
    }

    return ( 
        <StripeCheckout 
            currency="BRL"
            label="Buy Now"
            name="Crown Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Seu preço total é R$${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            locale="BR"
            token={onToken}
            stripeKey={publishableKey}
        />
    );

}

export default StripeCheckoutButton;