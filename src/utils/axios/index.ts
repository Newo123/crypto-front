import axios from 'axios';

const token = sessionStorage.getItem('token');

export const instance = axios.create({
	baseURL: 'https://newo123.duckdns.org',
	timeout: 1000,
	headers: {
		'X-Custom-Header': 'foobar'
	}
});

export const instanceAuth = axios.create({
	baseURL: 'https://newo123.duckdns.org',
	timeout: 1000,
	headers: {
		'X-Custom-Header': 'foobar',
		Authorization: `Bearer ${token}`
	}
});

export const coinGeckoApi = axios.create({
	baseURL: 'https://api.coingecko.com/api/v3',
	timeout: 1000,
	headers: {
		'X-Custom-Header': 'foobar'
	}
});
