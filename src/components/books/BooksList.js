import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore} from '../../stores'
import ItemsList from '../ItemsList'
import BookPreview from './BookPreview'

class BooksList extends React.Component {
    
  render() {
    return (
      <ItemsList store={booksStore}
                 linkType="books"
                 PreviewComponent={BookPreview}
                 children={this.props.children} />
    )
  }
}

export default BooksList;
