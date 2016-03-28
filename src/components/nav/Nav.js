import React, {PropTypes} from 'react';
import NavLink from './NavLink'

class Nav extends React.Component {
  static propTypes = {}

  // state = {}
  // methodName = () =>
  //   <div></div>
    
  render() {
    const {

    } = this.props

    return (
      <nav>
        <NavLink to="/books">Books</NavLink>
      </nav>
    )
  }
}

export default Nav;
