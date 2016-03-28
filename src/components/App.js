import React, {PropTypes} from 'react';
import Nav from './nav/Nav'

class App extends React.Component {
  static propTypes = {}

  // state = {}
  // methodName = () =>
  //   <div></div>
    
  render() {
    const {

    } = this.props

    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default App;
