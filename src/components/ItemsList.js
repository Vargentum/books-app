import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils'
import {Link} from 'react-router'
import {booksStore, authorsStore, genresStore} from '../stores'


export class ItemPreview extends React.Component {
  static propTypes = {}

  render() {
    const {
      name,
      id,
      linkType
    } = this.props

    return (
      <Link to={`/${linkType}/${id}`}>{name}</Link>
    )
  }
}


export class ItemsListUI extends React.Component {
  static propTypes = {}

  isntLoaded = (items) => items.some(x => !x)

  render() {
    const {items, linkType} = this.props
    if (!items || this.isntLoaded(items)) return <div>Loading...</div>

    const itemsList = items.map(item => {
      return (
        <li key={item.id}>
          <ItemPreview
            linkType={linkType}
            {...item} />
        </li>
      )
    })
    return <ul>{itemsList}</ul>
  }
}



class ItemsList extends Component {
  static getStores() {
    return [authorsStore, booksStore, genresStore]
  }

  static calculateState(prevState, props) {
    return props.store.getState()
  }

  componentWillMount() {
    this._token = this.props.store.addListener(this.handleLoad)
  }

  componentWillUnmount() {
    this._token.remove()
  }

  handleLoad = () => {
    this.setState(this.props.store.getState());
  }

  render() {
    return this.props.children || 
      <ItemsListUI linkType={this.props.linkType} 
                   {...this.state} />
  }
}

export default Container.create(ItemsList, {withProps: true});
