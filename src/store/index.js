import {combineReducers} from "redux";
import {configureStore} from '@reduxjs/toolkit'
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {thunk} from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher)