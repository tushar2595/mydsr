export const USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const UsersRequest = () => {
  return {
    type: USERS_REQUEST
  }
}

export const UsersSuccess = details => {
  return {
    type: USERS_SUCCESS,
    payload: details
  }
}

export const UsersFailure = error => {
  return {
    type: USERS_FAILURE,
    payload: error
  }
}