import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
    return (
        <div>
        <footer className="mt-5">
        <Container fluid={true} >
        <Row className="border-top justify-content-between p-3">
        <Col className="p-0" md={3} sm={12}>
       RealMrBehavior@gmail.com
        </Col>
        <Col className="p-0 d-flex justify-content-end" md={3}>
        This site was created by Mister Behavior<br></br>
        ReactJS Framework and Reactstrap Library<br></br>
        </Col>
        </Row>
        <Row>
        </Row>
        </Container>
        </footer> 
        </div>
    )
}
