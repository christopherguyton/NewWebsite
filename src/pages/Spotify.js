import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

//Customer Imports

import SpotifyLogo from '../images/SpotifyLogo.png';

function Spotify(props) {
    return (
        <div>
        <Container className="HeroContainer">
        <img src={SpotifyLogo}/>
        </Container>
        </div>
    )
}

export default Spotify