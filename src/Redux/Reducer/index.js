import { combineReducers } from 'redux'
import userReducer from './UserReducer';
import saveReducer from './SaveReducer';
import AuthReducer from './Auth';

const rootReducer = combineReducers({

  user: userReducer,
  saveReducer,
  details: AuthReducer

})

export default rootReducer