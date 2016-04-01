import React, {PropTypes} from 'react';
import {booksStore, authorsStore, genresStore} from '../../stores'
import ItemDetailed from '../ItemDetailed'
import {ItemsListUI} from '../ItemsList'
import {Link} from 'react-router'
import {ListGroupItem, DropdownButton, MenuItem} from 'react-bootstrap'

class AuthorPreviewUI extends React.Component {
  static propTypes = {}

  render() {
    const {
      id,
      name,
      books
    } = this.props

    return (
      <DropdownButton id={id + Math.random()} //TODO: add unique id
                      bsStyle="link" 
                      noCaret={true}
                      title={<span>{name}</span>}>
        <ListGroupItem>
          <Link to={`/authors/${id}`}>Detailed info</Link>
        </ListGroupItem>
        <ItemsListUI items={books}
                     linkType='books'/>
      </DropdownButton>
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
        books: item.getRelated('books')
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
