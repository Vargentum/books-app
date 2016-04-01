import React, {PropTypes} from 'react';
import AppNav from './nav/AppNav'
import {booksStore, authorsStore, genresStore} from '../stores'
import {loadBooksList, loadAuthorsList, loadGenresList} from '../actions'
import {Grid, Row, Col} from 'react-bootstrap'

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
      <Grid fluid={true}>
        <AppNav />
        <Row>
          <Col xs={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;
