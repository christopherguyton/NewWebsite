import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import GenGap from '../images/GenGap.jpg'
import EdsLogo from '../images/EdsBlog.png'


export default function Appearances() {
    return (
        <div>
     <Container className="HeroContainer">
     <h1 className="description" style={{marginTop: 150}}>Recent Podcast Appearances</h1>
     <Row>
     <Col>
     <img src={GenGap} alt="gengap" className="logos" style={{padding: 50}}/>
     <h3 class="appearancesText">Mister Behavior on <br></br>The Generational Gap (11/13/20)</h3>
     </Col>
     <Col>
     <img src={EdsLogo} alt="edslogo" className="logos" style={{padding: 50, width: 300}} />
     <h3 class="appearancesText">Mister Behavior on <br></br>Red and Ed show (11/16/20)</h3>
     </Col>
     </Row>
     </Container>
    
      
        </div>
    )
}
