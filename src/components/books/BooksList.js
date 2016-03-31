import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore} from '../../stores'
import ItemsList from '../ItemsList'

class BooksList extends React.Component {
    
  render() {
    return (
      <ItemsList store={booksStore}
                 linkType="books"
                 children={this.props.children} />
    )
  }
}

export default BooksList;
