import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
// Redux
import { connect, mapStateToProps, mapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMarkers } from "./actions";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

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
    return <View style={styles.container}>
        <MapView provider={ PROVIDER_GOOGLE } region={this.props.region} style={styles.map} onRegionChange={this.props.onRegionChange}>
          {this.props.markers ? this.props.markers.map(marker => {
                this.state.key += 1;
                return <MapView.Marker key={this.state.key} coordinate={{ latitude: marker.lat, longitude: marker.lon }}>
                    <Image style={{ width: 20, height: 20, tintColor: marker.color }} source={require("./assets/marker.png")} />
                  </MapView.Marker>;
              }) : null}
        </MapView>
      </View>;
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

const stateToProps = state => ({
  markers: state.markers
});

const dispatchToProps = {
  fetchMarkers
};

export default connect(stateToProps, dispatchToProps)(MapList);