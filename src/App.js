//React Imports

import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Custom Imports
import Appearances from './pages/Appearances';
import Support from './pages/Support';
import MainPage from './components/MainPage';
import BioPage from './pages/BioPage';
import LifeBar from './images/LifeBar.png';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mister Behavior',
      headerLinks: [
        {
          title: 'Home', path: '/'
        },
        {
          title: 'Bio', path: '/bio'
        },
        {
          title: 'YouTube', path: '/youtube'
        },
        {
          title: 'Podcast', path: '/podcast',
        },
        {
          title: 'Music', path: '/music',
        },
        {
          title: 'Appearances', path: '/appearances'
        },
        {
          contact: 'Support', path: '/support'
        }  
      ],
      mainpage: {
        description: 'Video Games. Music. Opinions.',
      },
      bio:  {
        header: 'Chris Locs A.K.A Mister Behavior',
        subtitle: 'Who is this guy?',
        section1: 'The name Mister Behavior (or MrBehavior), has been floating around the internet since the MySpace days. The name was originally conceived as the name of a band that Chris formed in his hometown of New Jersey in the early 2000s. There is one known recording from that band in existence, a song called "My Fender Guitar" which you can search for on ReverbNation (remember that?) if you happen to be curious. For a few years after the break up of that band, Chris headed to The San Francisco Bay Area where he spent 10 years within that scene, playing as the bassists for groups such as Vinyl Spectrum and the Plastic Villains. During that time, he also worked for Music City San Francisco and produced a podcasting segment called "The Noon-Ish Show" for the companies Music City Radio online radio network.',
        section2: 'After spending 10 years playing music in San Francisco and getting progressively more frustrated with the radical environment he had found himself in, Chris decided to take to the internet to express his thoughts, which is what ultimately gave birth to the Locs Takes brand, and revive Mister Behavior as a pseudonym. Presently, he has shifted his focus primarily on the realm of gaming, decicating his YouTube channel to commenting on the world of video games, and also learning how to make his own games in his spare time.',
        section3: 'Gaming as his greatest passion, Mister Behavior is currently spending most of his time working on gaming content as well as building his own game. Stay tuned to this site for updates, as more content will be hosted soon!',

      },
      appearances: {
        description: ''
      },
      support: {
        description: ''
      },
    }
  }

  render() {
    return(
     
      <Router>
      <Container>
      <Navbar collapseOnSelect fixed="top" bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/"><img src={LifeBar} alt="logo" thumbnail style={{height: 110, marginLeft: 20}} className="appearances"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Item>
        <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="2" as={Link} to="/bio">Bio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="3" as={Link} to="/appearances">Appearances</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="4" as={Link} to="/support">Support</Nav.Link>
        </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Route path='/' exact render={() => <MainPage description={this.state.mainpage.description}/>}/>
    <Route path='/bio' exact render={() => <BioPage header={this.state.bio.header} subtitle={this.state.bio.subtitle} section1={this.state.bio.section1} section2={this.state.bio.section2} section3={this.state.bio.section3}/>}/>
    <Route path='/appearances' exact render={() => <Appearances />}/>
    <Route path='/support' exact render={() => <Support/>}/>


    </Container>
    <Footer/>
    </Router>

 
    );
  }
}

export default App;
