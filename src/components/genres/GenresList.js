import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils'
import {genresStore} from '../../stores'
import ItemsList from '../ItemsList'

class GenresList extends React.Component {
    
  render() {
    return (
      <ItemsList store={genresStore}
                 linkType="genre" />
    )
  }
}

export default GenresList;
