import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class ProductCard extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {
        const {_id, name, description} = this.props.product;
        return (
            <Card style = {{ width: '18rem' }} key = {_id}>
                <Card.Img variant="top" src="/assets/img/category-8.jpg" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button as = {Link} to = {'/product/edit/'+_id}>Edit Product</Button>
                    <Button variant="danger" onClick = {()=>this.props.deleteProduct(this.props.product._id)}>Delete</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard
