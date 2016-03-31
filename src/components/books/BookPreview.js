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
      <article>
        <h2><Link to={`/book/${id}`}>{name}</Link></h2>
      </article>
    )
  }
}

export default BookPreview;
