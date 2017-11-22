export default (state = { markers: [] }, action = {}) => {
  switch (action.type) {
    case 'FETCH_MARKERS':
    case 'FETCH_MARKERS_SUCCEEDED':
      return { ...state, markers: action.markers };
    default:
      return state;
  }
};
