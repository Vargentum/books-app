import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils'
import {booksStore} from '../../stores'
import ItemsList from '../ItemsList'

class BooksList extends React.Component {
    
  render() {
    return (
      <ItemsList store={booksStore}
                 linkType="book" />
    )
  }
}

export default BooksList;




// class BooksListUI extends React.Component {
//   static propTypes = {}

//   isntLoaded = (items) => items.some(x => !x)

//   render() {
//     const {items} = this.props
//     if (!items || this.isntLoaded(items)) return <div>Loading...</div>
//     const itemsList = items.map(b => <li key={b.id}><BookPreview {...b} /></li>)
//     return <ul>{itemsList}</ul>
//   }
// }


// class BooksList extends Component {
//   static getStores() {
//     return [booksStore]
//   }

//   static calculateState(prevState, props) {
//     return booksStore.getState()
//   }

//   componentWillMount() {
//     this._token = booksStore.addListener(this.handleLoad)
//   }

//   componentWillUnmount() {
//     this._token.remove()
//   }

//   handleLoad = () => {
//     this.setState(booksStore.getState());
//   }

//   render() {
//     return (<BooksListUI {...this.state} />)
//   }
// }

// export default Container.create(BooksList);
