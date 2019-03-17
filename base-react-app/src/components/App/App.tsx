import * as React from 'react';
import './App.css';

import Content from '../Content/Content';
import Header from '../Header/Header';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
