import React, { Component } from 'react'
import axios from 'axios';
import {Card, Button, Container, Row, Col} from 'react-bootstrap'

export class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/product/')
        .then(response => this.setState({products : response.data}))
        .catch(err => console.log("error: "+ err))
    }

    renderProductList(){
        return this.state.products.map((currentProduct) =>{
            return (
            <Card style = {{ width: '18rem' }} key = {currentProduct._id}>
                <Card.Img variant="top" src="/assets/img/category-8.jpg" />
                <Card.Body>
                    <Card.Title>{currentProduct.name}</Card.Title>
                    <Card.Text>
                        {currentProduct.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
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
