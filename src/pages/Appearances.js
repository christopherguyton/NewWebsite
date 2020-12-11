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
     <a href="https://youtu.be/uVhRnn3n0TE"><img src={GenGap} alt="gengap" className="appearances" style={{padding: 50}}/></a>
     <h3 class="appearancesText">Mister Behavior on <br></br>The Generational Gap (11/13/20)</h3>
     </Col>
     <Col>
     <a href="https://youtu.be/P5biZzJdURk"><img src={EdsLogo} alt="edslogo" className="appearances" style={{padding: 50, width: 300}} /></a>
     <h3 class="appearancesText" style={{marginTop: 40}}>Mister Behavior on <br></br>Red and Ed show (11/16/20)</h3>
     </Col>
     </Row>
     </Container>
    
      
        </div>
    )
}
