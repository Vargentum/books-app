import React, {PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksDetailedStore} from '../../stores'
import {Link} from 'react-router'

class BookDetailedDump extends React.Component {
  static propTypes = {}

  render() {
    const {
      Author,
      ID,
      Title,
      SubTitle,
      Description,
      Publisher,
      Error
    } = this.props

    return (
      <article>
        <header>
          <h2>{Title}</h2>
          <h4>{SubTitle}</h4>
          <p>Publisher: {Publisher}</p>
        </header>
        <div>
          {Description}
        </div>
      </article>
    )
  }
}



class BookDetailed extends React.Component {
  static propTypes = {}

  static getStores() {
    return [booksDetailedStore]
  }

  static calculateState(prevState, props) {
    return booksDetailedStore.getState()
  }

  componentWillMount() {
    this._token = booksDetailedStore.addListener(this.handleStoreUpdate)
  }

  componentWillUnmount() {
    this._token.remove()
  }

  handleStoreUpdate = () => {
    const status = booksDetailedStore.at('status')
    if (status !== 'success') return
    this.setState(booksDetailedStore.at(this.props.params.id))
  }


  render() {

    return (
      <div>
        <Link to="/books">Back</Link>
        <BookDetailedDump {...this.state} />
      </div>
    )
  }
}

export default Container.create(BookDetailed, {withProps: true})
