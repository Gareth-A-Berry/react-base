import Example from './Example';
import { connect } from 'react-redux'
import {
  getExamplePostRequest,
  getExampleGetRequest
} from '@redux/example/actions';

const mapStateToProps = ({ example: { get, post }, ...state }) => ({
  ...state,
  get,
  post,
})

const mergeProps = ({ state }, { dispatch }, props) => ({
  ...state,
  ...props,
  handlePostRequest() {
    console.info('MAKING POST REQUEST')
    dispatch(getExamplePostRequest({}))
  },
  handleGetRequest() {
    console.info('MAKING GET REQUEST')
    dispatch(getExampleGetRequest())
  },
})

export default connect(mapStateToProps, null, mergeProps)(Example)
