function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const response = { status: 200, body: 'Success' };
      const error = { status: 500, body: 'Internal Server Error' };

      // Simulating a condition where the API call fails
      const apiCallFails = Math.random() > 0.5;

      if (apiCallFails) {
        reject(error);
      } else {
        resolve(response);
      }
    }, 2000); // Resolving or rejecting the Promise after 2 seconds
  });
}

export default getResponseFromAPI;
