export function PostData(type, userData) {
  let baseUrl = "https://reqres.in/api/";
  return new Promise((resolve, reject) => {
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
export function getData() {
  let baseUrl = "http://localhost:8000/posts";
  return new Promise((resolve, reject) => {
    fetch(baseUrl,
      {
        method: "GET"
      })
      .then((res) => res.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((err) => {
        reject(err)
      })
  })
}