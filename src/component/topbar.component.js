import React, { Component } from 'react'
import {Navbar, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export class Topbar extends Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Row>
                <Navbar.Brand href="#home">
                    <i className="fa fa-envelope"></i>
                    gdsc@greatdeal.com
                </Navbar.Brand>
            </Row>
            <Row>
                <Navbar.Brand href="#home">
                    <i className="fa fa-phone-alt"></i>
                    0917 801 7770
                </Navbar.Brand>
            </Row>

        </Container>
      </Navbar>
        )
    }
}

export default Topbar;
