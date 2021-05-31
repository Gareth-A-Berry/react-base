import { actionFactory } from '@factories'

export const EXAMPLE_POST_REQUEST = 'EXAMPLE_POST_REQUEST'
export const getExamplePostRequest = (payload) => actionFactory(EXAMPLE_POST_REQUEST, payload)

export const EXAMPLE_POST_SUCCESS = 'EXAMPLE_POST_SUCCESS'
export const examplePostSuccess = (payload) => actionFactory(EXAMPLE_POST_SUCCESS, payload)

export const EXAMPLE_POST_FAILURE = 'EXAMPLE_POST_FAILURE'
export const examplePostFailure = (error) => actionFactory(EXAMPLE_POST_FAILURE, { ...error })

export const EXAMPLE_GET_REQUEST = 'EXAMPLE_GET_REQUEST'
export const getExampleGetRequest = (payload) => actionFactory(EXAMPLE_GET_REQUEST, payload)

export const EXAMPLE_GET_SUCCESS = 'EXAMPLE_GET_SUCCESS'
export const exampleGetSuccess = (payload) => actionFactory(EXAMPLE_GET_SUCCESS, payload)

export const EXAMPLE_GET_FAILURE = 'EXAMPLE_GET_FAILURE'
export const exampleGetFailure = (error) => actionFactory(EXAMPLE_GET_FAILURE, { ...error })
