import React from 'react';
import ReactDOM from 'react-dom';

import Router from './scenes/router';
import Api from './api';

class App extends React.Component {
  constructor(props) {
    super(props);

    Api.init();
    
  }

  render() {
    return <Router />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
