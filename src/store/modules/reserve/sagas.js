import { all, call, put, takeLatest } from 'redux-saga/effects';
import { addReverveSuccess } from './actions';

import api from "../../../services/api"

function* addToReserve({ id }){
    const response = yield call(api.get, `trips/${id}`);

    yield put(addReverveSuccess(response.data));
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
]);