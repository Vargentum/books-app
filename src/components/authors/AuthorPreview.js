import React, {PropTypes} from 'react';
import {booksStore, authorsStore, genresStore} from '../../stores'
import ItemDetailed from '../ItemDetailed'
import {ItemsListUI} from '../ItemsList'
import {BackButton} from '../../utils/ui'
import {Link} from 'react-router'

class AuthorPreviewUI extends React.Component {
  static propTypes = {}

  render() {
    const {
      id,
      name,
      books
    } = this.props
    console.log(books)

    return (
      <article>
        <h4><Link to={`/authors/${id}`}>{name}</Link></h4>
        <ItemsListUI items={books}
                     linkType='books'/>
      </article>
    )
  }
}



class AuthorPreview extends ItemDetailed {

  handleStoreUpdate = () => {
    if (!authorsStore.isCached()) return null
    const item = authorsStore.getById(this.props.id)
    this.setState(Object.assign({},
      item,
      {
        books: item.getRelated('books', booksStore)
      }
    ))
  }

  render() {
    return (
      <div>
        {authorsStore.isntLoaded() ?
          "Loading..."
          :
          <AuthorPreviewUI {...this.state} />  
        }
      </div>
    )
  }
}

export default AuthorPreview
