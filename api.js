import axios from 'axios';

function fetchMarkers() {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return axios.get(`https://appear.pl/pins.json`);
};

export default {
    fetchMarkers
};
