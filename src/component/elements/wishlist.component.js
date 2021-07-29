import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
export class Wishlist extends Component {
    render() {
        return (
            <Button variant="outline-danger"><FontAwesomeIcon icon={faHeart} /></Button>
        )
    }
}

export default Wishlist
