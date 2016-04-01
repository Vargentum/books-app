import React, {PropTypes} from 'react';
import {booksStore, authorsStore, genresStore} from '../../stores'
import ItemDetailed from '../ItemDetailed'
import {ItemsListUI} from '../ItemsList'
import {BackButton} from '../../utils/ui'
import {Link} from 'react-router'

class BookPreviewUI extends React.Component {
  static propTypes = {}

  render() {
    const {
      id,
      name,
      authors
    } = this.props

    return (
      <article>
        <h4><Link to={`/books/${id}`}>{name}</Link></h4>
        <ItemsListUI items={authors}
                     linkType='authors'/>
      </article>
    )
  }
}



class BookPreview extends ItemDetailed {

  handleStoreUpdate = () => {
    if (!booksStore.isCached()) return null
    const item = booksStore.getById(this.props.id)
    this.setState(Object.assign({},
      item,
      {
        authors: item.getRelated('authors', authorsStore)
      }
    ))
  }

  render() {
    return (
      <div>
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
