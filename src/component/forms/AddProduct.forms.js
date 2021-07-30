import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios'

export class AddProduct extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name : '',
            description : '',
            sku : '',
            category_id : '',
            inventory_id : '',
            price : '',
            discount : ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }

    onInputChange(e){
        e.preventDefault();
        this.setState(state =>({
            [e.target.name]: e.target.value,
        }), ()=>{
            console.log(this.state)
        })
    }
    saveProduct(e){
        e.preventDefault();

        const product = {
            name : this.state.name,
            description : this.state.description,
            sku : this.state.sku,
            category_id : this.state.category_id,
            inventory_id : this.state.inventory_id,
            price : this.state.price,
            discount : this.state.discount
        }

        axios.post("http://localhost:5000/product/add", product)
        .then(({data})=>console.log(data))
        .catch(err => console.log("Error: " + err));

    }
    // const sku = req.body.sku;
    // const category_id = req.body.category_id;
    // const inventory_id = req.body.inventory_id;
    // const price = req.body.price;
    // const discount = req.body.discount;
    render() {
        return (
            <div>
                <Form onSubmit = {this.saveProduct}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="name" type="text" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="description" type="text" placeholder="Enter Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSku">
                        <Form.Label>Sku (This should be automatically generated from backend)</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="sku" type="number" placeholder="Enter sku" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCategory">
                        <Form.Label>Category Id</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="category_id" type="number" placeholder="Enter Category Id" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formInventoryId">
                        <Form.Label>Inventory Id</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="inventory_id" type="number" placeholder="Enter inventory id" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="price" type="number" placeholder="Enter price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDiscount">
                        <Form.Label>Discount</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="discount" type="number" placeholder="Enter discount" />
                    </Form.Group>
                    <Button type="submit">Sign in</Button>
                </Form>
            </div>
        )
    }
}

export default AddProduct
