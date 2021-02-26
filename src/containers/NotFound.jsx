import React from 'react';
import { useLocation, withRouter } from 'react-router-dom';

class NotFound extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <h1>NotFound {this.props.location.pathname}</h1>;
  }
}

// const NotFound = () => (
//   <h1>NotFound</h1>
// );

export default withRouter(NotFound);
