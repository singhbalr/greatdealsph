import React, { Component } from 'react'
import axios from 'axios';
import {ProductCard} from "./../elements/productCard.component"
import {Row, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';


export class ProductList extends Component {
    constructor(props) {
        super(props)
    

        this.deleteProduct = this.deleteProduct.bind(this)
    }


    deleteProduct(id){
        axios.delete('http://localhost:5000/product/' + id)
        .then(res => {
            console.log("Item deleted");
            this.setState({
                products : this.props.products.filter(currentProduct => currentProduct._id !== id )
            })
        })
        .catch(err => console.log("error :" +err))
    }
    editProduct(id){

    }
    renderProductList(){
        return this.props.products.map((currentProduct) =>{
            return (
                <ProductCard product = {currentProduct} deleteProduct = {this.deleteProduct} key = {currentProduct._id}></ProductCard>

            )
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <Button as = {Link} to ={`/product/add`}>Add Product</Button>
                <Row>
                    {this.renderProductList()}
                </Row>
            </React.Fragment>

        )
    }
}

export default ProductList
