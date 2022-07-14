const axios = require('axios');

const getData = async () => {
  const url = 'https://api.github.com/users/amadeulee';
  const response = await axios.get(url).then(response.data);

  return response;
};

export default getData;
