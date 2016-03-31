import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {authorsStore, booksStore} from '../../stores'
import {Link} from 'react-router'
import {ItemsListUI} from '../ItemsList'
import ItemDetailed from '../ItemDetailed'

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
          <h5>Books: 
            <ItemsListUI items={books}
                         linkType='book'/>
          </h5>
        </header>
        <div>
          {biography}
        </div>
      </article>
    )
  }
}



class AuthorDetailed extends ItemDetailed {

  handleStoreUpdate = () => {
    if (!authorsStore.isCached()) return null
    const author = authorsStore.getById(this.props.params.id)
    console.log(author.getRelated('books', booksStore))
    this.setState(Object.assign({},
      author,
      {
        books: author.getRelated('books', booksStore)
      }
    ))
  }

  render() {
    return (
      <div>
        <Link to="/authors">Back</Link>
        <AuthorDetailedUI {...this.state} />
      </div>
    )
  }
}

export default AuthorDetailed
