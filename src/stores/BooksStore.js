import dispatcher from '../utils/dispatcher'
import {EventEmitter} from 'events'

export default class BooksStore extends EventEmitter {
  constructor() {
    super()

    this.__books = []

    dispatcher.register(({type, data}) => {
      switch (type) {
        case "BOOKS_LIST_LOADING_START":
          this.loading = true
          break;

        case "BOOKS_LIST_LOADING_SUCCESS":
          this.__books = this.__books.concat(data.Books)
          this.loading = false
          this.loaded = true
          break;

        default:
          return null
      }

      this.emit("UPD")
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

