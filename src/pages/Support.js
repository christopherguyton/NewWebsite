import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';


//Custom

import PatreonLogo from '../images/PatreonLogo.png'
import VenmoLogo from '../images/VenmoLogo.png'
import PayPalLogo from '../images/PayPal.png'

export default function Support() {
    return (
       
        <div>
        <Container className="HeroContainer" style={{padding: 50}}>
        <Row>
        <Col>
        <Container>
        <h2 className="description" style={{textAlign: 'center'}}>Like the Content and Want to Support?</h2>
        </Container>
        </Col>
        </Row>
       <Row>
       <h3 className="description" style={{}}>Become a Patron...</h3>
    
    <Col>
    <a href="https://www.patreon.com/mrbehavior"><img src={PatreonLogo} alt="patreonlogo" className="appearances" style={{width: 100, marginLeft: 150, paddingBottom: 10, backgroundColor: 'black'}}/></a>
        </Col>
    </Row>
        <Row>
        <Row>
        
        </Row>
        <Col>
        <h3 className="description" style={{}}>Or Donate Directly...</h3>
        </Col>
        <Col>
        <a href="https://venmo.com/Chris-Locs2"><img src={VenmoLogo} alt="venmologo" className="appearances" style={{width: 100, paddingTop: 10, marginRight: 10}}/></a>
        <a href="https://paypal.me/mrbehavior"><img src={PayPalLogo} alt="paypallogo" className="appearances" style={{width: 100, paddingTop: 10}}/></a>
       
        </Col>
        </Row>
       

      
       
        </Container>
         
        </div>
    )
}
