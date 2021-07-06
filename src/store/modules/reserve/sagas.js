import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { addReverveSuccess, updateAmountReserve } from "./actions";

import api from "../../../services/api";

function* addToReserve({ id }) {
  const tripExists = yield select((state) =>
    state.reserve.find((trip) => trip.id === id)
  );

  if (tripExists) {
    //Aumentar o amount
    const amount = tripExists.amount + 1;

    yield put(updateAmountReserve(id, amount))

  } else {
    const response = yield call(api.get, `trips/${id}`);

    const data = {
        ...response.data,
        amount: 1,
    }

    yield put(addReverveSuccess(data));
  }
}

export default all([takeLatest("ADD_RESERVE_REQUEST", addToReserve)]);
