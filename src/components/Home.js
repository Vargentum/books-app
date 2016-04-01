import React, {PropTypes} from 'react';
import {Jumbotron, } from 'react-bootstrap'

class Home extends React.Component {
  static propTypes = {}
    
  render() {
    const {} = this.props

    return (
      <Jumbotron>
        <h1>Hey there!</h1>
        <p>This SPA has developed to proof my react skillset, according to this <a href="https://gist.github.com/geksilla/72a0cb882d2b7d8b4336">scenario.</a></p>
        <p>Feel free to drop any comments on my <a mailto="mail:vargentum@gmail.com">email</a> :)</p>
      </Jumbotron>
    )
  }
}

export default Home;
