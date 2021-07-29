import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import About from './pages/about.page'
import Discount from './pages/discount.page'
import Home from './pages/home.page'
import Product from './pages/product.page'
import User from './pages/user.page'

export class Mainpage extends Component {
    //handles the mainpage routing component
    render() {
        return (
            <React.Fragment>
                <Route path ="/home" exact component = {Home} />
                <Route path ="/product" component = {Product} />
                <Route path ="/discount" component = {Discount} />
                <Route path ="/user" component = {User} />
                <Route path ="/aboutus" component = {About} />
            </React.Fragment>


        )
    }
}

export default Mainpage
