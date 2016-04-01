import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils'
import {genresStore} from '../../stores'
import ItemsList from '../ItemsList'
import GenrePreview from './GenrePreview'

class GenresList extends React.Component {
    
  render() {
    return (
      <ItemsList store={genresStore}
                 linkType="genres"
                 PreviewComponent={GenrePreview}
                 children={this.props.children} />
    )
  }
}

export default GenresList;
