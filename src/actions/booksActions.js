import dispatcher from '../utils/dispatcher'
import reqwest from 'reqwest'
const API = '//it-ebooks-api.info/v1/'


const apiCall = (url, success, error, ...rest) => {
  reqwest(Object.assign(
    {url: `${API}/${url}`}, 
    {success, error},
    rest))
}

const asyncRequest = (url, type) => {
  dispatcher.dispatch({
    type: type + "_LOADING_START"
  })

  apiCall(
    url,
    (response) => {
      dispatcher.dispatch({
        type: type + "_LOADING_SUCCESS",
        data: response
      })
    },
    (error) => {
      dispatcher.dispatch({
        type: type + "_LOADING_ERROR",
        data: error
      })
    }
  )
}


export const loadBooksList = (type) => asyncRequest(`/search/javascript`, "BOOKS_LIST")
export const getBookByID = (id) => asyncRequest(`/book/${id}`, 'BOOK_DETAILS')
