import React from 'react';
import  {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selector';

import CollectionsOverview from '../../components/collections-overview/collection-overview.component';

const ShopPage = ({collections}) => (

    <div className='shop-page'>
        <CollectionsOverview/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
});

export default connect(mapStateToProps)(ShopPage);