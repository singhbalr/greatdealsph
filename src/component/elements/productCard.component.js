import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

export class ProductCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Card style = {{ width: '18rem' }} key = {this.props.product._id}>
                <Card.Img variant="top" src="/assets/img/category-8.jpg" />
                <Card.Body>
                    <Card.Title>{this.props.product.name}</Card.Title>
                    <Card.Text>
                        {this.props.product.description}
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger" onClick = {()=>this.props.deleteProduct(this.props.product._id)}>Delete</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard
