import { GET_COMPANIES, FIND_COMPANY } from '../actions'


export default function(state = {}, action) {
  switch (action.type) {
  case GET_COMPANIES:
    if (!action.error) {
      console.log('get company', action.payload)
      
      return action.payload
    }
    return {error: action.error}
  case FIND_COMPANY:
    if (!action.error) {
      console.log('find company', action.payload)
      
      return action.payload
    }
    return {error: action.error}
  default:
    return state
  }
}
