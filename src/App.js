//React Imports

import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Custom Imports
import Bio from './pages/Bio';
import Appearances from './pages/Appearances';
import Podcast from './pages/Podcast';
import YouTube from './pages/Youtube';
import Support from './pages/Support';
import MainPage from './components/MainPage';


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
        description: 'Just Another Guy Online With Opinions',
      },
      bio:  {
        description: 'A'
      },
      youtube: {
        description: 'A'
      },
      podcast: {
        description: 'A'
      },
      music: {
        description: 'A'
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
      <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Mister Behavior</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/bio">Bio</Link>
        <Link className="nav-link" to="/youtube">YouTube</Link>
        <Link className="nav-link" to="/podcast">Podcast</Link>
        <Link className="nav-link" to="/appearances">Appearances</Link>
        <Link className="nav-link" to="/support">Support</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Route path='/' exact render={() => <MainPage description={this.state.mainpage.description}/>}/>
    <Route path='/bio' exact render={() => <Bio/>}/>
    <Route path='/youtube' exact render={() => <YouTube />}/>
    <Route path='/podcast' exact render={() => <Podcast/>}/>
    <Route path='/appearances' exact render={() => <Appearances />}/>
    <Route path='/support' exact render={() => <Support/>}/>


    </Container>
    </Router>
 
 
    );
  }
}

export default App;
