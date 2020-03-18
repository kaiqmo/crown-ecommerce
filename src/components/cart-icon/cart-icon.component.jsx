import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';

import './cart-icon.styles.scss';
 
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CartIcon = ({toggleCartHidden}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shoppingIcon"/>
        <span className="item-count">0</span>

    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);