import App from '@src/app/App';
import { connect } from 'react-redux'
import lifecycle from '@hocs/lifecycle'

const mergeProps = ({ state }, { dispatch }, props) => ({
  ...state,
  ...props,
  didMount() {
    console.info('APP HAS MOUNTED')
  },
})

export default connect(null, null, mergeProps)(lifecycle({ didMount: 'didMount' })(App))
