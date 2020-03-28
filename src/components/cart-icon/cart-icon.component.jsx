import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';

import { selectCartItemsCount} from '../../redux/cart/cart.selector';

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
const mapStateToProps = state =>({
    itemCount: selectCartItemsCount(state)
});// computando a quantidade de um estado

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);