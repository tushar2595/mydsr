import axios from 'axios';
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