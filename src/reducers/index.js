import { combineReducers } from 'redux'
import companies from './reducer_companies'

const rootReducer = combineReducers({
  companies,
})

export default rootReducer