import React, {PropTypes} from 'react';
import {Link} from 'react-router'

class BookPreview extends React.Component {
  static propTypes = {}

  componentWIll

  render() {
    const {
      Title,
      ID
    } = this.props

    return (
      <article>
        <h2><Link to={`/book/${ID}`}>{Title}</Link></h2>
      </article>
    )
  }
}

export default BookPreview;
