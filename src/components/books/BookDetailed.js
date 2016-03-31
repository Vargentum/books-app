import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore, authorsStore, genresStore} from '../../stores'
import {Link} from 'react-router'
import {ItemsListUI} from '../ItemsList'
import ItemDetailed from '../ItemDetailed'

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
              <ItemsListUI items={authors}
                           linkType='authors'/>
          </h5>
          <h5>
            Genres:
            <ItemsListUI items={genres}
                         linkType='genres'/></h5>
        </header>
        <div>
          {description}
        </div>
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

export default BookDetailed
