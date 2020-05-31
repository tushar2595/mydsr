
export const USERS_REQUEST = 'USERS_REQUEST'
export const USERS_SUCCESS = 'USERS_SUCCESS'
export const USERS_FAILURE = 'USERS_FAILURE'
const initialState = {
  loading: false,
  details: {},
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case USERS_SUCCESS:
      return {
        loading: false,
        details: action.payload,
        error: ''
      }
    case USERS_FAILURE:
      return {
        loading: false,
        users: {},
        error: action.payload
      }
    default: return state
  }
}

export default reducer;