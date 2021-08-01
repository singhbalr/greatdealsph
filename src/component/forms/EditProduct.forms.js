import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'

export class EditProduct extends Component {

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
        this.id = window.location.pathname.split("/").pop();
        this.onInputChange = this.onInputChange.bind(this);
        this.editProduct = this.editProduct.bind(this);

        
    }

    onInputChange(e){
        e.preventDefault();
        this.setState(state =>({
            [e.target.name]: e.target.value,
        }), ()=>{
            console.log(this.state)
        })
    }
    editProduct(e){
        e.preventDefault();

        const {name, description, sku,category_id,inventory_id,price,discount} = this.state;

        const product = {
            name : name,
            description : description,
            sku : sku,
            category_id : category_id,
            inventory_id : inventory_id,
            price : price,
            discount : discount
        }

        axios.post("http://localhost:5000/product/update/"+this.id, product)
        .then(({data})=>{
            window.location = "/product/view";
        })
        .catch(err => console.log("Error: " + err));

    }

    componentDidMount(){
        axios.get("http://localhost:5000/product/"+this.id)
        .then(({data})=>{
            
            this.setState({
                name : data.name,
                description : data.description,
                sku : data.sku,
                category_id : data.category_id,
                inventory_id : data.inventory_id,
                price : data.price,
                discount : data.discount
            })
        })
        .catch(err => console.log("Error: " + err));
    }
    render() {
        const {name, description, sku,category_id,inventory_id,price,discount} = this.state;
        return (
            <div>
                <Button as ={Link} to = {'/product/view'}>Back</Button>
                <Form onSubmit = {this.editProduct}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="name" type="text" placeholder="Enter email" value = {name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="description" type="text" placeholder="Enter Description"  value = {description} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSku">
                        <Form.Label>Sku (This should be automatically generated from backend)</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="sku" type="number" placeholder="Enter sku" value = {sku} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCategory">
                        <Form.Label>Category Id</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="category_id" type="number" placeholder="Enter Category Id" value = {category_id} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formInventoryId">
                        <Form.Label>Inventory Id</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="inventory_id" type="number" placeholder="Enter inventory id" value = {inventory_id} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="price" type="number" placeholder="Enter price" value = {price} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDiscount">
                        <Form.Label>Discount</Form.Label>
                        <Form.Control onChange={this.onInputChange} name ="discount" type="number" placeholder="Enter discount" value = {discount} />
                    </Form.Group>
                    <Button type="submit">Sign in</Button>
                </Form>
            </div>
        )
    }
}

export default EditProduct
