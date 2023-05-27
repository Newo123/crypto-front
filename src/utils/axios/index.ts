import axios from 'axios';

// export const instance = axios.create({
//   baseURL: 'http://localhost:4200',
//   timeout: 1000,
//   headers: { 'X-Custom-Header': 'foobar' },
// });

export const instance = axios.create({
  baseURL: 'http://192.168.0.4:4200',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
  },
});

export const coinGeckoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
  },
});
