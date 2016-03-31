import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils'
import {authorsStore} from '../../stores'
import ItemsList from '../ItemsList'


class AuthorsList extends React.Component {
    
  render() {
    return (
      <ItemsList store={authorsStore}
                 linkType="author" />
    )
  }
}

export default AuthorsList;





// export class AuthorsListUI extends React.Component {
//   static propTypes = {}

//   isntLoaded = (items) => items.some(x => !x)

//   render() {
//     const {items} = this.props
//     if (!items || this.isntLoaded(items)) return <div>Loading...</div>
    
//     const itemsList = items.map(b => {
//       return <li key={b.id}><AuthorPreview {...b} /></li>
//     })
//     return <ul>{itemsList}</ul>
//   }
// }



// class AuthorsList extends Component {
//   static getStores() {
//     return [authorsStore]
//   }

//   static calculateState(prevState, props) {
//     return authorsStore.getState()
//   }

//   componentWillMount() {
//     this._token = authorsStore.addListener(this.handleLoad)
//   }

//   componentWillUnmount() {
//     this._token.remove()
//   }

//   handleLoad = () => {
//     this.setState(authorsStore.getState());
//   }

//   render() {
//     return (<AuthorsListUI {...this.state} />)
//   }
// }

// export default Container.create(AuthorsList);
