import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import example from './example/reducer'
import * as sagas from './rootSaga'

export default combineReducers({
  example,
})

export function* rootSagas() {
  yield all(sagas)
}
