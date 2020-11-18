import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App'

import LocsMan from '../images/LocsManX.png';
import YouTubeLogo from '../images/YoutubeLogo.png';
import SpotifyLogo from '../images/SpotifyLogo.png';
import TwitchLogo from '../images/TwitchLogo2.png';

function MainPage(props) {
    console.log(props);
    return (
       <Container fluid className="HeroContainer">
      <Row>
        <Col>
        <img src={LocsMan} alt="avatar" thumbnail style={{width: 400}}/>
        </Col>
        <Col>
        <h2 className="description">{props.description}</h2>
        <Container className="LogoContainer">
        <Row>
        <img src={SpotifyLogo} alt="spotify" thumbnail style={{width: 110, height: 90}}/>
        <img src={YouTubeLogo} alt="youtube" thumbnail style={{width: 100, marginTop: 5, marginLeft: 60}}/>
        <img src={TwitchLogo} alt="spotify" thumbnail style={{width: 110, height: 90, marginLeft: 50}}/>
        </Row>
        </Container>
        </Col>
        </Row>
        </Container>
        
    );
}

export default MainPage;