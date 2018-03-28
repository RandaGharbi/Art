import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { showMenu } = this.props;
    return (
      <div>
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
        <div className="shape4"></div>
        <div className="errorContainer">
          <div className="error"><span>404</span></div>
          <div className="message"><span>la page que vous cherchez n'existe pas</span></div>
        </div>
      </div>
    );
  }
}

export default NotFound;