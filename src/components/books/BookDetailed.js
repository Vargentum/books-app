import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore, authorsStore} from '../../stores'
import {Link} from 'react-router'
import AuthorPreview from '../authors/AuthorPreview'
import {AuthorsListUI} from '../authors/AuthorsList'

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
          <h5>Authors: 
              <AuthorsListUI items={authors}/>
          </h5>
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
    return [booksStore, authorsStore]
  }

  static calculateState(prevState, props) {
    return {}
  }

  componentWillMount() {
    this._tokens = [
      booksStore.addListener(this.handleStoreUpdate),
      authorsStore.addListener(this.handleStoreUpdate)
    ]
  }

  componentWillUnmount() {
    this._tokens.map(t => t.remove())
  }
  
  componentDidMount() {
    this.handleStoreUpdate()
  }

  handleStoreUpdate = () => {
    if (!booksStore.isCached()) return null
    const book = booksStore.getById(this.props.params.id)
    this.setState(Object.assign({},
      book,
      {authors: book.getRelated('authors', authorsStore)}
    ))
  }

  render() {
    return (
      <div>
        <Link to="/books">Back</Link>
        {booksStore.isntLoaded() ?
          "Loading..."
          :
          <BookDetailedUI {...this.state} />  
        }
      </div>
    )
  }
}

export default Container.create(BookDetailed, {withProps: true})
