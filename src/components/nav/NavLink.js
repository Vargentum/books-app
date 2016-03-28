import React, {PropTypes} from 'react';
import {Link} from 'react-router'

class NavLink extends React.Component {

  render() {

    return (
      <Link {...this.props} activeStyle={{color: 'red'}}>{this.props.children}</Link>
    )
  }
}

export default NavLink;
  