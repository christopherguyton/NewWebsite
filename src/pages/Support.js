import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

//Custom

import PatreonLogo from '../images/PatreonLogo.png'
import VenmoLogo from '../images/VenmoLogo.png'

export default function Support() {
    return (
       
        <div>
        <Container className="HeroContainer">
        <Row>
        <Col>
        <Container>
        <h2 className="description" style={{textAlign: 'center', paddingTop: 10}}>Like the Content and Want to Support?</h2>
        </Container>
        </Col>
        </Row>
        <Row>
        <Col>
        <h3 className="description" style={{marginLeft: 100, paddingTop: 10}}>Become a Patron...</h3>
        <a href="https://www.patreon.com/mrbehavior"><img src={PatreonLogo} alt="patreonlogo" className="logos" style={{width: 100, marginLeft: 150, paddingBottom: 10}}/></a>
        </Col>
        <Col>
        <h3 className="description" style={{marginLeft: 100, paddingTop: 10}}>Or Donate Directly...</h3>
        <a href="https://venmo.com/Chris-Locs2"><img src={VenmoLogo} alt="venmologo" className="logos" style={{width: 100, marginLeft: 160, paddingBottom: 10}}/></a>
        </Col>

        </Row>
       
        </Container>
         
        </div>
    )
}
