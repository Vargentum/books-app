import React, {PropTypes} from 'react';
import NavLink from './NavLink'
import {Nav, NavItem} from 'react-bootstrap'

class AppNav extends React.Component {
  static propTypes = {}

  render() {
    const {

    } = this.props

    return (
      <Nav bsStyle="tabs" className="m-b-3">
        <NavItem>
          <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/books">Books</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/authors">Authors</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/genres">Genres</NavLink>
        </NavItem>
      </Nav>
    )
  }
}

export default AppNav;
