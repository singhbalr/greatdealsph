import React, { Component } from 'react';
import {AddProduct} from './../forms/AddProduct.forms';
import {EditProduct} from './../forms/EditProduct.forms';
import {ProductList} from './../elements/productlist.component';
import {SearchProduct} from './../elements/searchProduct.component'
import {Route} from 'react-router-dom';
import axios from 'axios';

export class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            products:[],
            searchQuery : ''
       }
       this.SearchProduct = this.SearchProduct.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/product/')
        .then(response => this.setState({products : response.data}))
        .catch(err => console.log("error: "+ err))
    }

    SearchProduct(searchQuery){
        console.log("Triggered by props");
        this.setState(state =>({
            searchQuery: searchQuery,
        }), ()=>{
            const {searchQuery} = this.state;

            axios.get("http://localhost:5000/product/search/"+searchQuery)
            .then(response => this.setState({products : response.data}))
            .catch(err => console.log("Error: " + err));
        })
    }


    render() {
        const {products} = this.state;
        return (
            <div>
                <h1>Product</h1>
                <React.Fragment>
                    <Route exact path={`/product/view`}>
                        <h1>View Product</h1>
                        <SearchProduct SearchProduct = {this.SearchProduct}></SearchProduct>
                        <ProductList products = {products}></ProductList>
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
