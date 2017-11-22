import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from "./api";

export default function* onFetchRecords() {
  yield takeLatest('FETCH_MARKERS', function* _fetchMarkers() {
    try {
        const response = yield call(Api.fetchMarkers);
        yield put({type: "FETCH_MARKERS_SUCCEEDED", markers: response.data});
    } catch (e) {
        yield put({type: "FETCH_MARKERS_FAILED", message: e.message});
    }
  });
}
