import React from 'react';
import checkout from './shopping-cart-solid.svg';

function Checkout(props) {
    const items = props.database.filter((item) => {
        return item.bought === true;
    })

    return (
        <div className='checkout'>
            <img src={checkout} alt='CheckOutType'/>
            <span className='counter'>
                {items.length}
            </span>
        </div>
    );
}

export default Checkout;