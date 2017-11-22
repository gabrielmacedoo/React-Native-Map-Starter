/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { connect, Provider } from "react-redux";
import mySaga from './sagas';
import reducer from './reducer';

import MapList from './MapList';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      region : {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
      }
    }
  }
  
  onRegionChange(region) {
    this.setState({region});
  }
  render() {
    return <Provider store={store}>
        <MapList onRegionChange={this.onRegionChange.bind(this)}/>
      </Provider>;
  }
}
