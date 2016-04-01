import React, {Component, PropTypes} from 'react';
import {Container} from 'flux/utils'
import {authorsStore} from '../../stores'
import ItemsList from '../ItemsList'
import AuthorPreview from './AuthorPreview'


class AuthorsList extends React.Component {
    
  render() {
    return (
      <ItemsList store={authorsStore}
                 linkType="authors"
                 PreviewComponent={AuthorPreview}
                 children={this.props.children} />
    )
  }
}

export default AuthorsList;
