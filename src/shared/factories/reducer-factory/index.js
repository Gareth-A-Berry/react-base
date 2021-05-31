import REQUEST_TYPES from '@constants/emuns/actionRequestTypes'

const reducerFactory = (initialState, types) => (state = initialState, { type, payload }) => {
  if (type in types && type.includes(REQUEST_TYPES.REQUEST)) {
    return {
      ...state,
      loading: true,
      success: false,
      error: undefined
    }
  } else if (type in types && type.includes(REQUEST_TYPES.SUCCESS)) {
    return { ...state, ...payload, loading: false, success: true }
  } else if (type in types && type.includes(REQUEST_TYPES.FAILURE)) {
    return { ...state, loading: false, success: false, error: payload }
  } else if (type in types) return { ...state, ...payload }
  return { ...state }
}

export default reducerFactory
