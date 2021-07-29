import React, { Component } from 'react'
import {Button, Alert, Navbar, Container, Row, Nav} from 'react-bootstrap'
import {link, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} to="/home">Home</Nav.Link>
                        <Nav.Link as = {Link} to="/product">Product</Nav.Link>
                        <Nav.Link as = {Link} to="/discount">Special Discount</Nav.Link>
                        <Nav.Link as = {Link} to="/user">My Account</Nav.Link>
                        <Nav.Link as = {Link} to="/aboutus">About Us</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation
