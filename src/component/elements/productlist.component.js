import React, { Component } from 'react'
import axios from 'axios';
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import {ProductCard} from "./../elements/productCard.component"

export class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[]
        }

        this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:5000/product/')
        .then(response => this.setState({products : response.data}))
        .catch(err => console.log("error: "+ err))
    }

    deleteProduct(id){
        axios.delete('http://localhost:5000/product/' + id)
        .then(res => {
            console.log("Item deleted");
            this.setState({
                products : this.state.products.filter(currentProduct => currentProduct._id !== id )
            })
        })
        .catch(err => console.log("error :" +err))
    }
    renderProductList(){
        return this.state.products.map((currentProduct) =>{
            return (
                <ProductCard product = {currentProduct} deleteProduct = {this.deleteProduct} key = {currentProduct._id}></ProductCard>

            )
        })
    }
    
    render() {
        return (
            <Row>
                {this.renderProductList()}
            </Row>

        )
    }
}

export default ProductList
