import dispatcher from '../utils/dispatcher'
import reqwest from 'reqwest'
const API = '//it-ebooks-api.info/v1/'

export const loadBooksList = () => {

  [1,2,3,4,5].forEach((num) => {
    reqwest({
      url: `${API}/search/javascript/page/${num}`,
      method: 'GET',
      cache: 'default',
      headers: {

      },
      contentType: 'application/json',
      crossOrigin: true,
      success: (response) => {
        console.log(response)
        dispatcher.dispatch({
          type: "BOOKS_LOADED",
          data: response
        })
      }
    })
  })
}