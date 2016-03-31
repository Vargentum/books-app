import React, {PropTypes} from 'react';
import {Link} from 'react-router'


class BookPreview extends React.Component {
  static propTypes = {}

  render() {
    const {
      name,
      id
    } = this.props

    return (
      <Link to={`/book/${id}`}>{name}</Link>
    )
  }
}

export default BookPreview;
