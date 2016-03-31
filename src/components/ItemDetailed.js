import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore, authorsStore, genresStore} from '../stores'


class ItemDetailed extends React.Component {
  static propTypes = {}

  static getStores() {
    return [booksStore, authorsStore, genresStore]
  }

  static calculateState(prevState, props) {
    return {}
  }

  componentWillMount() {
    this._tokens = [
      booksStore.addListener(this.handleStoreUpdate),
      authorsStore.addListener(this.handleStoreUpdate),
      genresStore.addListener(this.handleStoreUpdate)
    ]
  }

  componentWillUnmount() {
    this._tokens.map(t => t.remove())
  }
  
  componentDidMount() {
    this.handleStoreUpdate()
  }

}

export default Container.create(ItemDetailed, {withProps: true})
