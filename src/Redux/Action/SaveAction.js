import axios from 'axios';
export const SAVE_PROJECT_REQUEST = 'SAVE_PROJECT_REQUEST'
export const SAVE_PROJECT_SUCCESS = 'SAVE_PROJECT_SUCCESS'
export const SAVE_PROJECT_FAILURE = 'SAVE_PROJECT_FAILURE'

export function saveProject(data) {
  console.log(data, 'sdjnj');
  axios.post('https://my-dsr.herokuapp.com/posts', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    }
    )

}
export const saveProjectRequest = () => {
  return {
    type: SAVE_PROJECT_REQUEST
  }
}

export const saveProjectSuccess = users => {
  return {
    type: SAVE_PROJECT_SUCCESS,
    payload: users
  }
}

export const saveProjectFailure = error => {
  return {
    type: SAVE_PROJECT_FAILURE,
    payload: error
  }
}