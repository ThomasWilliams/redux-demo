import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ClickHandler from './ClickHandler';
import reducers from './reducers';

export default class App extends Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={ store }>
        <div className="main">
          <ClickHandler />
        </div>
      </Provider>
    );
  }
}
