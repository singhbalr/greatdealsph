import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
export class Cart extends Component {
    render() {
        return (
            <Button variant="outline-danger"><FontAwesomeIcon icon={faCartPlus} /></Button>
        )
    }
}

export default Cart
