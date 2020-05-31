import axios from 'axios';

export function login(type, userData) {
  let baseUrl = "https://my-dsr.herokuapp.com/api/user/";
  return new Promise((resolve, reject, dispatch) => {
    console.log(userData, 'hhhhhhhhhh');
    fetch(baseUrl + type,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);

      })
      .catch((error) => {
        reject(error);
      });
  });
}
export function register(type, userData) {
  let baseUrl = "https://my-dsr.herokuapp.com/api/user/";
  return new Promise((resolve, reject) => {
    console.log(userData, 'hhhhhhhhhh');
    fetch(baseUrl + type,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);

      })
      .catch((error) => {
        reject(error);
      });
  });
}
// export function saveProject(data) {
//   console.log(data, 'sdjnj');
//   axios.post('https://my-dsr.herokuapp.com/posts', data)
//     .then(response => {
//       console.log(response)
//     })
//     .catch(error => {
//       console.log(error);
//     }
//     )

// }
// export function login(type, userData) {
//   let baseUrl = 'https://my-dsr.herokuapp.com/api/user/';

//   axios.post(baseUrl + type, userData)
//     .then((response) => response.json())

//     .catch(error => {
//       console.log(error);
//     }
//     )
// }
