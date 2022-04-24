//API KEY = 893a77bb80325b17c47ba528b0e276ef
//API DATABASE = https://api.themoviedb.org/3

import axios from 'axios';

const API_KEY = '893a77bb80325b17c47ba528b0e276ef';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const generalFetch = async (urlLink: string) => {
  const req = await axios.create({
    baseURL: `${API_BASE_URL}${urlLink}/json`,
  });
  return req;
};

export default {
  getHomeList: async () => {
    return [
      {
        category: 'originals',
        title: 'Originais do Netflix',
        items: await generalFetch(`/discover/tv?with_network=213`),
      },
      {
        category: 'trending',
        title: 'Recomendados para você',
        items: [],
      },
      {
        category: 'toprated',
        title: 'Em Alta',
        items: [],
      },
    ];
  },
};
