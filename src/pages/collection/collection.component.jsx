import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import {selectCollection} from '../../redux/shop/shop.selector';

import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component.jsx'

const CollectionPage = ({collection, match}) =>{
    const {title, items} = collection;
    console.log({match});
    return(
        <div className='collection-page'>
            <h2 className='title'>{title} </h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);