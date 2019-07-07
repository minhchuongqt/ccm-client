import axios from 'axios';

import { API } from '../config';

export default ({headers}) => axios.create({
    baseURL: API,
    timeout: 10000,
    headers: {
      ...headers,
    },
  });
