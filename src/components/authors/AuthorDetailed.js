import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {authorsStore, booksStore} from '../../stores'
import {ItemsListUI} from '../ItemsList'
import ItemDetailed from '../ItemDetailed'
import {BackButton} from '../../utils/ui'

class AuthorDetailedUI extends React.Component {
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
        </header>
        <div>
          {biography}
        </div>
        <footer>
          <h5>Books: </h5>
          <ItemsListUI items={books}
                       linkType='books'/>
        </footer>
      </article>
    )
  }
}



class AuthorDetailed extends ItemDetailed {

  handleStoreUpdate = () => {
    if (!authorsStore.isCached()) return null
    const item = authorsStore.getById(this.props.params.id)
    this.setState(Object.assign({},
      item,
      {
        books: item.getRelated('books')
      }
    ))
  }

  render() {
    return (
      <div>
        <BackButton to="/authors"/>
        {authorsStore.isntLoaded() ?
          "Loading..."
          :
          <AuthorDetailedUI {...this.state} />
        }
      </div>
    )
  }
}

export default AuthorDetailed
