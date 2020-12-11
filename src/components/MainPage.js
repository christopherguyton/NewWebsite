import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App'

import LocsMan from '../images/LocsManX.png';
import YouTubeLogo from '../images/YoutubeLogo.png';
import SpotifyLogo from '../images/SpotifyLogo.png';
import TwitchLogo from '../images/TwitchLogo2.png';
import TwitterLogo from '../images/TwitterLogo.png';
import BandCampLogo from '../images/BandCampLogo.png';

function MainPage(props) {
    console.log(props);
    return (
       <Container fluid className="HeroContainer">
      <Row>
        <Col>
        <img src={LocsMan} alt="avatar" thumbnail style={{width: 400}}/>
        </Col>
        <Col className="sm-6">
        <h2 className="description">{props.description}</h2>
        <Container className="LogoContainer">
        <Row>
        <a href="https://open.spotify.com/show/6KA6SqohjUvrrzlZDjIXuL?si=3P7glcofQ3iIZ7r8sf6oQQ"><img src={SpotifyLogo} alt="spotify" thumbnail style={{width: 110, height: 90}} className="logos"/></a>
        <a href="https://www.youtube.com/channel/UCAegArzsmQ15lOKgSOU-ZHg?view_as=subscriber"><img src={YouTubeLogo} alt="youtube" thumbnail style={{width: 100, marginTop: 5, marginLeft: 70}} className="logos"/></a>
        <a href="https://www.twitch.tv/mrbehavior"><img src={TwitchLogo} alt="spotify" thumbnail style={{width: 110, height: 90, marginLeft: 70}} className="logos"/></a>
       
        <div className="rowTwoLogos">
        <a href="https://twitter.com/RealMrBehavior"><img src={TwitterLogo} alt="twitter" thumbnail style={{width: 110, height: 90}} className="logos"/></a>
        <a href="https://misterbehavior.bandcamp.com/album/playlist-x"><img src={BandCampLogo} alt="bandcamp" thumbnail style={{width: 110, height: 90, marginLeft: 70}} className="logos"/></a>
        </div>
        </Row>
     
        </Container>
        
        </Col>
        </Row>
        
        </Container>
     
        
    );
}

export default MainPage;