import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore} from '../../stores'
import {Link} from 'react-router'

class BookDetailedUI extends React.Component {
  static propTypes = {}

  render() {
    const {
      id,
      name,
      description,
      authors,
      genres,
    } = this.props

    return (
      <article>
        <header>
          <h2>{name}</h2>
          <h5>Authors: {authors}</h5>
          <h5>Genres: {genres}</h5>
        </header>
        <div>
          {description}
        </div>
      </article>
    )
  }
}



class BookDetailed extends React.Component {
  static propTypes = {}

  static getStores() {
    return [booksStore]
  }

  static calculateState(prevState, props) {
    return booksStore.getById(props.params.id)
  }

  componentWillMount() {
    this._token = booksStore.addListener(this.handleStoreUpdate)
  }

  componentWillUnmount() {
    this._token.remove()
  }

  handleStoreUpdate = () => {
    this.setState(booksStore.getById(this.props.params.id))
  }


  render() {

    return (
      <div>
        <Link to="/books">Back</Link>
        <BookDetailedUI {...this.state} />
      </div>
    )
  }
}

export default Container.create(BookDetailed, {withProps: true})
