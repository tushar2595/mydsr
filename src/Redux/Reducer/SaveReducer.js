
export const SAVE_PROECT_REQUEST = 'SAVE_PROECT_REQUEST'
export const SAVE_PROJECT_SUCCESS = 'SAVE_PROJECT_SUCCESS'
export const SAVE_PROJECT_FAILURE = 'SAVE_PROJECT_FAILURE'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const saveReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROECT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SAVE_PROJECT_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case SAVE_PROJECT_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}

export default saveReducer;