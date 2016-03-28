import React, {Component, PropTypes} from 'react';
import Book from './Book'
import BooksStore from '../../stores/BooksStore'
import {loadBooksList} from '../../actions/booksActions'

const booksStore = new BooksStore()

class BooksList extends Component {
  static propTypes = {}

  state = {
    books: booksStore.getAll()        
  }

  componentWillMount() {
    booksStore.addLoadListener(this.handleLoad)
  }

  componentDidMount() {
    loadBooksList()
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

    const booksList = books.map(b => <li key={b.ID}><Book {...b} /></li>)

    return (
      <div>
        BooksList test
        {booksList}
      </div>
    )
  }
}

export default BooksList;
