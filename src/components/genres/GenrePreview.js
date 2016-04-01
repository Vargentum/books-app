import React, {PropTypes} from 'react';
import {booksStore, authorsStore, genresStore} from '../../stores'
import ItemDetailed from '../ItemDetailed'
import {ItemsListUI} from '../ItemsList'
import {BackButton} from '../../utils/ui'
import {Link} from 'react-router'

class GenrePreviewUI extends React.Component {
  static propTypes = {}

  render() {
    const {
      id,
      name,
      authors
    } = this.props

    return (
      <article>
        <h4><Link to={`/genres/${id}`}>{name}</Link></h4>
        <ItemsListUI items={authors}
                     linkType='authors'/>
      </article>
    )
  }
}



class GenrePreview extends ItemDetailed {

  handleStoreUpdate = () => {
    if (!genresStore.isCached()) return null
    const item = genresStore.getById(this.props.id)
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
        {genresStore.isntLoaded() ?
          "Loading..."
          :
          <GenrePreviewUI {...this.state} />  
        }
      </div>
    )
  }
}

export default GenrePreview
