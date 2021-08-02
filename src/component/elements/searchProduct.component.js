import React, { Component } from 'react';
import {Row, Col, Form} from 'react-bootstrap';

export class SearchProduct extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchQuery : ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(e){
        e.preventDefault();
        this.setState(state =>({
            [e.target.name]: e.target.value,
        }), ()=>{
            console.log(this.state)
        })
    }
    
    render() {
        return (
            <div>
                <Row className="g-2">
                    <Col md>
                    <Form onSubmit = {(e)=>{
                        e.preventDefault();
                        this.props.SearchProduct(this.state.searchQuery);
                    }}>
                        <Form.Group className="mb-3" controlId="forSearchQuery">
                            <Form.Control onChange={this.onInputChange} type="text" name = "searchQuery" placeholder="Bag" />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SearchProduct
