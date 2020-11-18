import React, {Component} from 'react';
import { Container, Col } from 'react-bootstrap';

class BioComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          items: [
              {
                id: 0,
                paragraph: 'The name Mister Behavior (or MrBehavior), has been floating around the internet since the MySpace days. The name was originally conceived as the name of a band that Chris formed in his hometown of New Jersey in the early 2000s. There is one known recording from that band in existance, a song called "My Fender Guitar that can be found here if you are actually curious about hearing it. The link goes to ReverbNation (remember that?). For a few years after the break up of that band, Chris headed to The San Francisco Bay Area where he spent 10 years within that scene, playing as the bassists for groups such as Vinyl Spectrum and the Plastic Villains. During that time, he also worked for Music City San Francisco and produced a podcasting segment called "The Noon-Ish Show" for the companies Music City Radio online radio network.',
              },
              {
                id: 1,
                paragraph: 'After spending 10 years playing music in San Francisco and getting progressively more frustrated with the radical envrionment he had found himself in, Chris decided to take to the internet to express his thoughts, which is what ultimately gave birth to the Locs Takes brand, and revive Mister Behavior as a pseudonym. Presently, he has shifted his focus primarily on the realm of gaming, decicating his YouTube channel to commenting on the world of video games, and also learning how to make his own games in his spare time.'
              },

          ]
      }
  }

  excerpt = React.Children.toArray(this.state);
  

  render() {
      return(
          <Container>
          <Col>
          <p>{this.excerpt[0]}</p>
          </Col>
          </Container>
      )
  }
}

export default BioComponent;
