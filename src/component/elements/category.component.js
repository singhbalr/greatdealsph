import React, { Component } from 'react'
import {Col, Container, Row, Nav} from 'react-bootstrap';
import {categories} from './../libs/constant';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Category extends Component {
    
    renderNavigation(){
        return categories.map(currentCategories => {
           return <Nav.Link as = {Link} to={`/product/productId=${currentCategories.categoryId}`} className = 'secondary-scheme'><i class = {currentCategories.faIcon}></i>{currentCategories.categoryName}</Nav.Link>
        })
    }
    
    render() {
        return (
            <div className = "nav-container text-align-left secondary-scheme">
                <Nav defaultActiveKey="/product/productId=1" className="flex-column">
                {this.renderNavigation()}
                </Nav>
            </div>
        )
    }
}

export default Category
