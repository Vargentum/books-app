import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import App from "./components/App"
import BooksList from './components/books/BooksList'
import BookDetailed from './components/books/BookDetailed'
import AuthorsList from './components/authors/AuthorsList'
import AuthorDetailed from './components/authors/AuthorDetailed'

render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/books" 
               component={BooksList} />

        <Route path="/book/:id" 
               component={BookDetailed} />
        
        <Route path="/authors" 
               component={AuthorsList} />

        <Route path="/author/:id" 
               component={AuthorDetailed} />
      </Route>
    </Router>

  ), document.getElementById('container'))

      // <Route path="/authors" component={AuthorsList}>Authors</Route>
