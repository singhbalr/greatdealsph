import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {feautureItems} from './../libs/constant';

export class Feature extends Component {

    renderFeature(){
        return(
            feautureItems.map((currentFeatureItems)=>{
                return(
                    <Col>
                        <span className = "feature-icon"><i className = {currentFeatureItems.feautureImageUrl} key = {currentFeatureItems.feautureImageUrl}></i></span><h4>{currentFeatureItems.feautureLabelText}</h4><p>{currentFeatureItems.feautureLabelDescription}</p>
                    </Col>
                )
            })
        )

    }

    render() {
        return (
            <Container>
                <Row className = "align-items-center">
                    {this.renderFeature()}
                </Row>
            </Container>
        )
    }
}

export default Feature
