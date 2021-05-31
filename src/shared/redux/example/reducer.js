import { reducerFactory } from '@factories'
import * as actions from './actions'

export const initialState = {
    post: '',
    get: '',
}

/* eslint-disable */
const example = reducerFactory(initialState, actions)
export default example
