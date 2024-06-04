import fetch from 'node-fetch';

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    fetch('https://api.example.com/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

export default getResponseFromAPI;
