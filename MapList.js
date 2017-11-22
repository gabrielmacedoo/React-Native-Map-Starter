import React, { Component } from 'react';
import { StyleSheet,Image } from 'react-native';
// Redux
import { connect, mapStateToProps, mapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMarkers } from "./actions";
import MapView from "react-native-maps";

class MapList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0
    }
  }

  componentDidMount() {
    this.props.fetchMarkers();
  }


  render() {
    this.state.key = 0;
    return (
      <MapView
        region={this.props.region}
        style={styles.map}
        onRegionChange={this.props.onRegionChange}
      >
        {this.props.markers ?  this.props.markers.map(marker => {
          this.state.key += 1;
        return <MapView.Marker
          key={this.state.key}
          coordinate={{latitude: marker.lat, longitude: marker.lon}}
        >
        <Image style={{width: 20, height: 20, tintColor: marker.color}} source={require('./assets/marker.png')}></Image>
        </MapView.Marker>;
      }) : null}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mapContainer: {
    flex: 1
  },
  map: {
    flex: 1
  }
});

const stateToProps = state => ({
  markers: state.markers
});

const dispatchToProps = {
  fetchMarkers
};

export default connect(stateToProps, dispatchToProps)(MapList);