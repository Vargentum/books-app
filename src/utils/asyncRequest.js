import dispatcher from '../utils/dispatcher'
import reqwest from 'reqwest'
import {LOADING, ITEM_TYPES} from '../utils/constants'

const {start: LST, success: LSC, error: LER} = LOADING

const apiCall = (url, success, error, ...rest) => {
  reqwest(Object.assign(
    {url, success, error},
    rest))
}

const asyncRequest = (url, type) => {
  dispatcher.dispatch({
    type: type + LST
  })

  apiCall(
    url,
    (response) => {
      dispatcher.dispatch({
        type: type + LSC,
        data: response
      })
    },
    (error) => {
      dispatcher.dispatch({
        type: type + LER,
        data: error
      })
    }
  )
}

export default asyncRequest