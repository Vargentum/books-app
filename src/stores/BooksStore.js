// import React, {PropTypes} from 'react';
// import ItemsStore from './ItemsStore'
// import update from 'react-addons-update'

// export default class BooksStore extends ReduceStore {
//   constructor(...props) {
//     super(...props)
//   }

//   getInitialState() {
//     return {
//       items: [],
//       dataLoaded: false
//     }
//   }

//   reduce(state, {type, data}) {
//     switch (type) {
//       case "BOOKS_LOADING_START":
//         return Object.assign({}, state, {
//           status: 'loading'
//         })

//       case "BOOKS_LOADING_SUCCESS":
//         return Object.assign({}, state, {
//           items: data,
//           status: 'success',
//           dataLoaded: true
//         })

//       default:
//         return null
//     }
//   }

//   getById(id) {
//     return Object.assign({}, this._state.items[id])
//   }

//   isReadyToLoad() {
//     return !(this._state.status === 'loading' || this._state.dataLoaded)
//   }
// }

