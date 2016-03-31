import React, {PropTypes} from 'react';
import {Link} from 'react-router'


class AuthorPreview extends React.Component {
  static propTypes = {}

  render() {
    const {
      name,
      id,
    } = this.props

    return (
      <Link to={`/author/${id}`}>{name}</Link>
    )
  }
}

export default AuthorPreview;
