import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils'
import {authorsStore} from '../../stores'
import {loadAuthorsList} from '../../actions'
import AuthorPreview from './AuthorPreview'


class AuthorsListUI extends React.Component {
  static propTypes = {}

  render() {
    const {items} = this.props
    const itemsList = items.map(b => <li key={b.id}><AuthorPreview {...b} /></li>)
    return items && items.length ? <ul>{itemsList}</ul> : null
  }
}



class AuthorsList extends Component {
  static getStores() {
    return [authorsStore]
  }

  static calculateState(prevState, props) {
    return authorsStore.getState()
  }

  componentWillMount() {
    this._token = authorsStore.addListener(this.handleLoad)
  }

  componentWillUnmount() {
    this._token.remove()
  }

  componentDidMount() {
    if (authorsStore.isReadyToLoad()) loadAuthorsList()
  }

  handleLoad = () => {
    this.setState(authorsStore.getState());
  }

  render() {
    return (<AuthorsListUI {...this.state} />)
  }
}

export default Container.create(AuthorsList);
