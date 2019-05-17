import axios from 'axios';

const KEY = 'AIzaSyDjiTHWQnBdgNga3vT1HkYp1INfgLVcVkw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,

  }
});
