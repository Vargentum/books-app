import React, {PropTypes} from 'react';
import {ReduceStore} from 'flux/utils'
import {LOADING} from '../utils/constants'
import DataModel from '../utils/dataModel'

const {start: LST, success: LSC} = LOADING

export default class ItemsStore extends ReduceStore {
  constructor(itemType, stores, ...props) {
    super(...props)
    this._itemType = itemType
    this._stores = stores
  }

  getInitialState() {
    return {
      items: [],
      dataLoaded: false
    }
  }

  reduce(state, {type, data}) {
    switch (type) {
      case this._itemType + LST:
        return Object.assign({}, state, {
          status: LST
        })

      case this._itemType + LSC:
        return Object.assign({}, state, {
          items: data.map(d => new DataModel(d, this._stores)),
          status: LSC,
          dataLoaded: true
        })

      default:
        return state
    }
  }

  getById(id) {
    return this._state.items.filter(i => i.id == id)[0]
  }

  isntLoaded() {
    return !(this._state.status === LSC || this._state.dataLoaded)
  }
  
  isCached() {
    return this._state.dataLoaded
  }
}
