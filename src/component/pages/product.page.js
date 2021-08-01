import React, { Component } from 'react';
import {AddProduct} from './../forms/AddProduct.forms';
import {EditProduct} from './../forms/EditProduct.forms';
import {ProductList} from './../elements/productlist.component';
import {Route} from 'react-router-dom';

export class Product extends Component {
    render() {
        //match can be accessed using withRouter
        const {url, path} = this.props.match
        return (
            <div>
                <h1>Product</h1>
                <React.Fragment>
                    <Route exact path={`/product/view`}>
                        <h1>View Product</h1>
                        <ProductList></ProductList>
                    </Route>
                    <Route path = {`/product/add`}>
                        <h1>Add Product</h1>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path = {`/product/edit`}>
                        <h1>Edit Product</h1>
                        <EditProduct></EditProduct>
                    </Route>
                </React.Fragment>
                
                
            </div>
        )
    }
}

export default Product
