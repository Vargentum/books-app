import asyncRequest from '../utils/asyncRequest'
import {ITEM_TYPES} from '../utils/constants'
const {authors, genres, books} = ITEM_TYPES

export const loadBooksList = () => asyncRequest('/src/data/books.json', books)
export const loadAuthorsList = () => asyncRequest('/src/data/authors.json', authors)
export const loadGenresList = () => asyncRequest('/src/data/genres.json', genres)
