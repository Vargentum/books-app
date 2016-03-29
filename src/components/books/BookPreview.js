import React, {PropTypes} from 'react';
import {Link} from 'react-router'
import {getBookByID} from '../../actions/booksActions'
import {booksDetailedStore} from '../../stores'


class BookPreview extends React.Component {
  static propTypes = {}

  handleLinkClick = (id) => (ev) => {
    ev.preventDefault()
    getBookByID(id)
  }

  render() {
    const {
      Title,
      ID
    } = this.props

    return (
      <article>
        <h2 onClick={this.handleLinkClick(ID)} ><Link to={`/book/${ID}`}>{Title}</Link></h2>
      </article>
    )
  }
}

export default BookPreview;
