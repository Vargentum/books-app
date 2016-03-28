import dispatcher from '../utils/dispatcher'
import {EventEmitter} from 'events'
import loadBooksList from '../actions/booksActions'

export default class BooksStore extends EventEmitter {
  constructor() {
    super()

    this.__books = []

    dispatcher.register(({type, data}) => {
      switch (type) {
        case "BOOKS_LOADED":
          this.__books = this.__books.concat(data.Books)
          this.emit("UPD")
      }
    })
  }

  addLoadListener = (cb) => {
    this.on("UPD", cb)
  }

  removeLoadListener = () => {
    this.removeAllListeners("UPD")
  }

  getAll() {
    return this.__books.slice()
  }
}

