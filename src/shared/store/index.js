import configureStore from '@store/helpers'
import { rootSagas } from '@redux'

const store = configureStore()
store.runSaga(rootSagas)

export default store
