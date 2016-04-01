import ItemsStore from './ItemsStore'
import dispatcher from '../utils/dispatcher'
import {ITEM_TYPES} from '../utils/constants'

const {authors, genres, books} = ITEM_TYPES
const stores = {}

Object.assign(stores, {
  books: new ItemsStore(books, stores, dispatcher),
  genres: new ItemsStore(genres, stores, dispatcher),
  authors: new ItemsStore(authors, stores, dispatcher)
})

window.stores = stores //for debugging

export const booksStore = stores.books
export const genresStore = stores.genres
export const authorsStore = stores.authors
