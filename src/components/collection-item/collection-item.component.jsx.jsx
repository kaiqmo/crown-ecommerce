import React from 'react';

import './collection-item.styles.scss';

import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component.jsx';

const CollectionItem = ( { item, addItem }) => {
    const { name,price, imageUrl} = item;
    return(
    <div className='collection-item'>
        <div className='image'
            style={{ backgroundImage: `url(${imageUrl})`
         }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>R${price}</span>
        </div>
        <CustomButton inverted onClick={()=>addItem(item)} >Comprar</CustomButton>
    </div>
)
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch( addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
