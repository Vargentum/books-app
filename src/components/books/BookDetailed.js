import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore, authorsStore, genresStore} from '../../stores'
import {Link} from 'react-router'
import {ItemsListUI} from '../ItemsList'
import ItemDetailed from '../ItemDetailed'
import {BackButton} from '../../utils/ui'

class BookPreviewUI extends React.Component {
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



class BookPreview extends ItemDetailed {
  
  handleStoreUpdate = () => {
    if (!booksStore.isCached()) return null
    const item = booksStore.getById(this.props.params.id)
    this.setState(Object.assign({},
      item,
      {
        authors: item.getRelated('authors'),
        genres: item.getRelated('genres')
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
          <BookPreviewUI {...this.state} />  
        }
      </div>
    )
  }
}

export default BookPreview
