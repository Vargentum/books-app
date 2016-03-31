import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {authorsStore} from '../../stores'
import {Link} from 'react-router'

class BookDetailedUI extends React.Component {
  static propTypes = {}

  render() {
    const {
      id,
      name,
      biography,
      books
    } = this.props

    return (
      <article>
        <header>
          <h2>{name}</h2>
          <h5>Books: {books}</h5>
        </header>
        <div>
          {biography}
        </div>
      </article>
    )
  }
}



class BookDetailed extends React.Component {
  static propTypes = {}

  static getStores() {
    return [authorsStore]
  }

  static calculateState(prevState, props) {
    return authorsStore.getById(props.params.id)
  }

  componentWillMount() {
    this._token = authorsStore.addListener(this.handleStoreUpdate)
  }

  componentWillUnmount() {
    this._token.remove()
  }

  handleStoreUpdate = () => {
    this.setState(authorsStore.getById(this.props.params.id))
  }


  render() {

    return (
      <div>
        <Link to="/authors">Back</Link>
        <BookDetailedUI {...this.state} />
      </div>
    )
  }
}

export default Container.create(BookDetailed, {withProps: true})
