import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore, authorsStore, genresStore} from '../../stores'
import {Link} from 'react-router'
import {ItemsListUI} from '../ItemsList'
import ItemDetailed from '../ItemDetailed'
import {BackButton} from '../../utils/ui'

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
        </header>
        <div>
          {description}
        </div>
        <footer>
          <h5>Authors: </h5>
          <ItemsListUI items={authors}
                       linkType='authors'/>
          <h5>Genres:</h5>
          <ItemsListUI items={genres}
                       linkType='genres'/>
        </footer>
      </article>
    )
  }
}



class BookDetailed extends ItemDetailed {
  
  handleStoreUpdate = () => {
    if (!booksStore.isCached()) return null
    const book = booksStore.getById(this.props.params.id)
    this.setState(Object.assign({},
      book,
      {
        authors: book.getRelated('authors', authorsStore),
        genres: book.getRelated('genres', genresStore)
      }
    ))
  }

  render() {
    return (
      <div>
        <BackButton to="/books"/>
        {booksStore.isntLoaded() ?
          "Loading..."
          :
          <BookDetailedUI {...this.state} />  
        }
      </div>
    )
  }
}

export default BookDetailed
