import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import LocsMan from '../images/LocsManX.png';

function MainPage(props) {
    console.log(props);
    return (
       <Container>
        <h2 className="description">{props.description}</h2>
        <img src={LocsMan} alt="avatar" roundedCircle/>
        </Container>
    )
}

export default MainPage;