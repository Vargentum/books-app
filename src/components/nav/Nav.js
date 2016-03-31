import React, {PropTypes} from 'react';
import NavLink from './NavLink'

class Nav extends React.Component {
  static propTypes = {}

  render() {
    const {

    } = this.props

    return (
      <nav>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/authors">Authors</NavLink>
        <NavLink to="/genres">Genres</NavLink>
      </nav>
    )
  }
}

export default Nav;
