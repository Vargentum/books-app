// import React, {PropTypes} from 'react';
// import {Store, ReduceStore, MapStore} from 'flux/utils'
// import dispatcher from '../utils/dispatcher'
// import update from 'react-addons-update'

// export default class BooksDetailedStore extends ReduceStore {

//   constructor(...args) {
//     super(...args)
//   }

//   getInitialState() {
//     return {}
//   }

//   __setStatus = (state, type) => {
//     return update(state, {$merge: {status: type}})
//   }

//   __getUpdatedBooks = (state, data) => {
//     if (state[data.id]) return state
//     else return update(state, {[data.id]: {$set: data}})
//   }

//   reduce(state, {type, data}) {
//     switch (type) {
//       case "BOOK_DETAILS_LOADING_SUCCESS":
//         return this.__setStatus(this.__getUpdatedBooks(state, data), 'success')
//       default:
//         return state
//     }
//   }

//   at(key) {
//     return this._state[key]
//   }
// }
