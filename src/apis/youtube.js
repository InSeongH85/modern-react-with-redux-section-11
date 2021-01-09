import axios from 'axios'
const KEY = 'AIzaSyAkxO8H0SMrJic0SUPbF-iWGS9fJbX8JDM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3', 
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
