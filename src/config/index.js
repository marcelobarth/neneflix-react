const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3004'
  : 'https://neneflix-react.herokuapp.com';

export default {
  URL_BACKEND,
};
