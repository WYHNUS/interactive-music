import React from 'react';
import { withRouter } from 'react-router-dom';

class NavigationButton extends React.Component {
  render() {
    return (
      <button type="button"
        onClick={() => this.props.history.push(this.props.url)}
        style={{margin: "20px"}}
      >
        { this.props.name }
      </button>
    );
  }
}

export default withRouter(NavigationButton);