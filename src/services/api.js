import { create } from 'axios';

const api = create({
  baseURL: 'https://dev.people.com.ai/mobile/api/v2/',
});

export default api;
