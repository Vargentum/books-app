import React, {PropTypes} from 'react';

class Book extends React.Component {
  static propTypes = {}

  // state = {}
  // methodName = () =>
  //   <div></div>
    
  render() {
    const {

    } = this.props

    return (
      <div>
        Book
        {this.props.children}
      </div>
    )
  }
}

export default Book;
