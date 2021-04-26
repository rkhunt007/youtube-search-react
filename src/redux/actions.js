import youtube from "../api/youtube";

export const fetchVideos = (term) => async dispatch => {
    const res = await youtube.get('/search', { params: { q: term }});
    dispatch({
        type: 'LOAD_VIDEOS',
        payload: res.data.items
    })
}

export const selectVideo = (video) => {
    return {
        type: 'SELECT_VIDEO',
        payload: video
    };
}