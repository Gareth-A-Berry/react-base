import { put, call, takeEvery, all } from 'redux-saga/effects'
import {
    handlePostExample,
    handleGetExample
} from "@redux/example/requests";
import * as actions from './actions'

export const handleExamplePostRequest = function* (payload) {
    const response = yield call(handlePostExample, payload)
    if (response.isAxiosError) return yield put(actions.examplePostFailure(response.response.data))
    yield put(actions.examplePostFailure(response))
}

export const handleExampleGetRequest = function* () {
    const response = yield call(handleGetExample)
    if (response.isAxiosError) return yield put(actions.exampleGetFailure(response.response.data))
    yield put(actions.exampleGetSuccess(response))
}

export default all([
    takeEvery(actions.EXAMPLE_POST_REQUEST, handleExamplePostRequest),
    takeEvery(actions.EXAMPLE_GET_REQUEST, handleExampleGetRequest),
])
