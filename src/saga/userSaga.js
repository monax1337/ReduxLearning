import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_CUSTOMERS, addCustomerAction} from "../store/customerReducer";

const fetchUsersFromAPI = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
    const data = yield  call(fetchUsersFromAPI)
    const json = yield call(() => new Promise(res => res(data.json())))
    console.log(json)
    yield put(addCustomerAction(json))
}

export function* userWatcher() {
    yield takeEvery(FETCH_CUSTOMERS, fetchUserWorker)
}