import { combineReducers } from 'redux'
import userReducer from './UserReducer';
import saveReducer from './SaveReducer';

const rootReducer = combineReducers({

  user: userReducer,
  saveReducer
})

export default rootReducer