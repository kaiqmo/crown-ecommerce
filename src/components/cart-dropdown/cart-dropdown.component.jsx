import React from 'react';
import './cart-dropdown.styles.scss';
import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component.jsx';
import {selectCartItems} from '../../redux/cart/cart.selector';
import CustomButton from '../custom-button/custom-button.component.jsx';

import {toggleCartHidden} from '../../redux/cart/cart.actions.js';

import {createStructuredSelector} from 'reselect';
const CartDropDown = ({cartItems, history, dispatch}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />) )
                :
                <span className="empty-message">Your Cart is Empty</span>
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
})
export default withRouter( connect(mapStateToProps)(CartDropDown));