import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import ChibiLocs from '../images/ChibiLocs.png'
function BioPage(props) {
    return (
        <div>
        <Container fluid className="HeroContainer">
        <h1>{props.header}</h1>
        <Row> 
        <Col>
        <img src={ChibiLocs} style={{width: 400}} alt="ChibiLocs"></img>
        </Col>
        <Col>
        <p className="Biograph">{props.description}</p>
        </Col>
        </Row>
        
        </Container>
        </div>
    )
}

export default BioPage;
