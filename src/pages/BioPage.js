//React and Reactstrap

import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


//Custom
import ChibiLocs from '../images/ChibiLocs.png'
import ClickArrow from '../components/ClickArrow'
import BioComponent from '../components/BioComponent'

function BioPage(props) {
    return (
        <div>
        <Container fluid className="HeroContainer">
        <h1>{props.header}</h1>
        <h3 className="subtitle">{props.subtitle}</h3>
        <Row> 
        <Col>
        <img src={ChibiLocs} style={{width: 400}} alt="ChibiLocs"></img>
        </Col>
        <Col>
        <BioComponent/>
        <ClickArrow/>
        </Col>
        </Row>

        </Container>
    
        </div>
    )
}

export default BioPage;
