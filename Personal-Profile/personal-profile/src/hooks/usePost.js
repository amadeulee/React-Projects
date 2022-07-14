import axios from 'axios';
import { useState, useEffect } from 'react';

export function usePost(body) {
    const {outPut, setOutPut} = useState(null);
  const url = 'http://localhost:5000/';
  axios
    .post(url, body)
    .then(response => setOutPut(response.data))
    .catch(error => console.log(error));

    return {outPut}
}
