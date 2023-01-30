import { APP_ENVIRONMENT } from '@root/App';
import axios from 'axios';

export let BASE_ENDPOINT = '';

if (APP_ENVIRONMENT === 'develop') {
  BASE_ENDPOINT = 'http://localhost:5000';
} else if (APP_ENVIRONMENT === 'production') {
  BASE_ENDPOINT = 'https://api.fanfizzleserver.space';
}

const BASE_URL = `${BASE_ENDPOINT}/api/v1`;

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true,
});
