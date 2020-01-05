import React from 'react';
import COLLECTIONS_DATA from '../../shop.data';
class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            collections: COLLECTIONS_DATA
        }
    }
    render(){
        return ( <div>SHOP PAGE</div>)
    }
}

export default ShopPage;