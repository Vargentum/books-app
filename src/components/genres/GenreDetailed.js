import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore, authorsStore, genresStore} from '../../stores'
import {Link} from 'react-router'
import {ItemsListUI} from '../ItemsList'

class GenresDetailedUI extends React.Component {
  static propTypes = {}

  render() {
    const {
      id,
      name,
      books
    } = this.props

    return (
      <article>
        <header>
          <h2>{name}</h2>
          <h5>Books: 
              <ItemsListUI items={books}
                           linkType='books'/>
          </h5>
        </header>
      </article>
    )
  }
}



class GenresDetailed extends React.Component {
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

  handleStoreUpdate = () => {
    if (!genresStore.isCached()) return null
    const genre = genresStore.getById(this.props.params.id)
    this.setState(Object.assign({},
      genre,
      {
        books: genre.getRelated('books', booksStore)
      }
    ))
  }

  render() {
    return (
      <div>
        <Link to="/books">Back</Link>
        {genresStore.isntLoaded() ?
          "Loading..."
          :
          <GenresDetailedUI {...this.state} />  
        }
      </div>
    )
  }
}

export default Container.create(GenresDetailed, {withProps: true})
