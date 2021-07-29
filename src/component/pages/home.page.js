import React, { Component } from 'react';
import Search from '../elements/search.component';
import Wishlist from "../elements/wishlist.component";
import Cart from "../elements/cart.component";
import Category from "../elements/category.component";
import Carousell from "../elements/carousell.component";
import Feature from "../elements/feature.component";
import {Col, Container, Row} from 'react-bootstrap';
import {mainImgUrl} from './../libs/constant';
import "./../../style/Main.scss";

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <header className = "home-container">
                    <Row>
                            <Col ><img className = "main-logo" src={mainImgUrl} alt="greatdealsph"/></Col>
                            <Col><Search /></Col>
                            <Col><Wishlist /> <Cart /></Col>
                    </Row>
                </header>
                <div>
                    <br />
                    <Container>
                        <Row className = "align-items-center">
                            <Col ><Category></Category></Col>
                            <Col><Carousell></Carousell></Col>
                            <Col><Wishlist /></Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className = "align-items-center">
                            <Col ><Feature></Feature></Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default Home
