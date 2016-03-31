import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore} from '../../stores'
import {loadBooksList} from '../../actions'
import BookPreview from './BookPreview'


class BooksListUI extends React.Component {
  static propTypes = {}

  render() {
    const {items} = this.props
    const itemsList = items.map(b => <li key={b.id}><BookPreview {...b} /></li>)
    return items && items.length ? <ul>{itemsList}</ul> : null
  }
}


class BooksList extends Component {
  static getStores() {
    return [booksStore]
  }

  static calculateState(prevState, props) {
    return booksStore.getState()
  }

  componentWillMount() {
    this._token = booksStore.addListener(this.handleLoad)
  }

  componentWillUnmount() {
    this._token.remove()
  }

  componentDidMount() {
    if (booksStore.isReadyToLoad()) loadBooksList()
  }

  handleLoad = () => {
    this.setState(booksStore.getState());
  }

  render() {
    return (<BooksListUI {...this.state} />)
  }
}

export default Container.create(BooksList);
