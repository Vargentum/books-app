import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import App from "./components/App"
import BooksList from './components/books/BooksList'
import BookDetailed from './components/books/BookDetailed'
import AuthorsList from './components/authors/AuthorsList'
import AuthorDetailed from './components/authors/AuthorDetailed'
import GenresList from './components/genres/GenresList'
import GenresDetailed from './components/genres/GenreDetailed'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="books" component={BooksList}>
        <Route path=":id" component={BookDetailed} />
      </Route>
      
      <Route path="authors" component={AuthorsList}>
        <Route path=":id" component={AuthorDetailed} />
      </Route>
      
      <Route path="genres" component={GenresList}>
        <Route path=":id" component={GenresDetailed} />
      </Route>
    </Route>
  </Router>

), document.getElementById('container'))
