import {put, takeEvery} from "redux-saga/effects"
import {
    ASYNC_ADD_CASH,
    ASYNC_GET_CASH,
    decrementCreator,
    incrementCreator
} from "../store/cashReducer";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementWorker() {
    yield delay(1000)
    yield put(incrementCreator())
}

function* decrementWorker() {
    yield delay(1000)
    yield put(decrementCreator())
}

export function* countWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, incrementWorker)
    yield takeEvery(ASYNC_GET_CASH, decrementWorker)
}