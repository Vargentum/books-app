import React, {Component, PropTypes} from 'react';
import BookPreview from './BookPreview'
import {booksStore} from '../../stores'
import {loadBooksList} from '../../actions/booksActions'

class BooksList extends Component {
  static propTypes = {}

  state = {
    books: booksStore.getAll()        
  }

  componentWillMount() {
    booksStore.addLoadListener(this.handleLoad)
  }

  componentDidMount() {
    if (!booksStore.loading && !booksStore.loaded) loadBooksList()
  }

  componentWillUnmount() {
    booksStore.removeLoadListener()
  }

  handleLoad = () => {
    this.setState({
      books: booksStore.getAll() 
    });
  }

    
  render() {
    const {
      books
    } = this.state

    if (!books.length) return null

    const booksList = books.map(b => <li key={b.ID}><BookPreview {...b} /></li>)

    return (
      <div>
        Books List
        {booksList}
      </div>
    )
  }
}

export default BooksList;
