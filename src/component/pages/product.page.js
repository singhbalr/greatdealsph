import React, { Component } from 'react';
import {AddProduct} from './../forms/AddProduct.forms';
import {ProductList} from './../elements/productlist.component';
export class Product extends Component {
    render() {
        return (
            <div>
                <h1>Product</h1>
                <AddProduct></AddProduct>
                <ProductList></ProductList>
            </div>
        )
    }
}

export default Product
