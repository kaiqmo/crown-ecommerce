import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';

import './cart-icon.styles.scss';
 
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shoppingIcon"/>
        <span className="item-count">{itemCount}</span>

    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = ({cart:{cartItems}}) =>({
    itemCount: cartItems.reduce( (accumulatedQuantity,cartItem) => accumulatedQuantity + cartItem.quantity,0)
});// computando a quantidade de um estado

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);