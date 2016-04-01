import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'

export class BackButton extends React.Component {
  static propTypes = {}

  render() {
    const {to} = this.props

    return (
      <Link to={to}>
        <Button bsStyle="default">
          Back
          </Button>
      </Link>
    )
  }
}
