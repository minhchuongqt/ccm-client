import axios from 'axios';

import { API } from '../config';

export default ({headers}) =>axios.create({
    baseURL: API,
    timeout: 20000,
    headers: {
      ...headers,
    },
  });
