import axios from 'axios';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'


export const fetchUsers = () => {
  var ls = require('local-storage');
  var tok = ls.get('token');
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    // axios
    //   .get('https://my-dsr.herokuapp.com/api/posts')
    axios({
      method: 'get',
      url: 'https://my-dsr.herokuapp.com/api/posts',
      headers: { 'auth-token': tok }
    })
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}