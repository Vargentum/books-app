import React, {PropTypes} from 'react';
import Nav from './nav/Nav'
import {booksStore, authorsStore, genresStore} from '../stores'
import {loadBooksList, loadAuthorsList, loadGenresList} from '../actions'

const STORES = [
  {
    store: booksStore,
    init: loadBooksList
  },
  {
    store: authorsStore,
    init: loadAuthorsList
  },
  {
    store: genresStore,
    init: loadGenresList
  }
]

class App extends React.Component {
  static propTypes = {}

  componentDidMount() {
    this.initStores()
  }

  initStores() {
    STORES.forEach(({store, init}) => {
      if (store.isntLoaded()) init()
    })
  }
    
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default App;
