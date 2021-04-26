import axios from 'axios';

const key = 'AIzaSyCiAEA6qZ41WK7iXFy60Yb9_ffiBvA8iwM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: key,
        q: 'test'
    }
});