import BooksStore from './BooksStore'
import BooksDetailedStore from './BooksDetailedStore'
import dispatcher from '../utils/dispatcher'


export const booksStore = new BooksStore()
export const booksDetailedStore = new BooksDetailedStore(dispatcher)