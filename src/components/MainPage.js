import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faBandcamp, faSpotify, faTwitch, faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

import LocsMan from '../images/LocsManX.png';


library.add(fab);

function MainPage(props) {
    console.log(props);
    return (
       <Container fluid className="HeroContainer">
      <Row>
        <Col>
        <img src={LocsMan} alt="avatar" thumbnail style={{width: 400}}/>
        </Col>
        <Col>
        <Col className="sm-6">
        <h2 className="description">{props.description}</h2>
        </Col>
        <Container className="LogoContainer">
        <Row>
        <Col>
        <a href="https://open.spotify.com/artist/62alsPIjErfHCfWAkRt5gm?si=FHP0bNYXRY2AI4TCNjEUfA"><FontAwesomeIcon icon={faSpotify} size="6x"/></a>
        </Col>
        <Col>
        <a href="https://www.youtube.com/channel/UCAegArzsmQ15lOKgSOU-ZHg?view_as=subscriber"><FontAwesomeIcon icon={faYoutube} size="6x"/></a>
        </Col>
        <Col>
        <a href="https://www.twitch.tv/mrbehavior"><FontAwesomeIcon icon={faTwitch} size="6x"/></a>
        </Col>
        </Row>
        <Row>
        <Col>
        <a href="https://twitter.com/RealMrBehavior"><FontAwesomeIcon icon={faTwitter} size="6x" className="logo"/></a>
        </Col>
        <Col>
        <a href="https://misterbehavior.bandcamp.com/album/playlist-x"><FontAwesomeIcon icon={faBandcamp} size="6x" /></a>
        </Col>
        <Col>
        <a href="https://www.facebook.com/LocsTakes"><FontAwesomeIcon icon={faFacebook} size="6x" /></a>
        </Col>
        </Row>
        
     
        </Container>
        
        </Col>
        </Row>
        
        </Container>
     
        
    );
}

export default MainPage;