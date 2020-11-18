//React and Reactstrap

import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


//Custom
import ChibiLocs from '../images/ChibiLocs.png'
import RealLocs from '../images/ChrisReal.jpg'
import CartoonLocs from '../images/ChrisFace2.PNG'


function BioPage(props) {
    return (
        <div>
        <Container fluid className="HeroContainer">
        <h1>{props.header}</h1>
        <h3 className="subtitle">{props.subtitle}</h3>
        <Row> 
        <Col>
        <img src={ChibiLocs} style={{width: 400}} alt="ChibiLocs" id="ChibiLocs"></img>
        </Col>
        <Col>
        <h5 className="bioSection">{props.section1}</h5>
        </Col>
        </Row>
        </Container>
        <Container fluid className="SpacedContainer">
        <Row> 
        <Col>
        <h5 className="bioSection2">{props.section2}</h5>
        </Col>
        <Col>
        <img src={RealLocs} style={{width: 400}} alt="RealLocs" id="RealLocs"></img>
        </Col>
       
        </Row>

        </Container>
        <Container fluid className="SpacedContainer">
        <Row> 
        <Col>
        <img src={CartoonLocs} style={{width: 300}} alt="CartoonLocs" id="CartoonLocs"></img>
        </Col>
        <Col>
        <h5 className="bioSection3">{props.section3}</h5>
        </Col>
        </Row>

        </Container>
        </div>
    )
}

export default BioPage;
