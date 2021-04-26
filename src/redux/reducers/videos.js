const initialState = {
    videos: [],
    selectedVideo: ''
};

const video = (state = initialState, action) => {
    if (action.type === 'SELECT_VIDEO') {
        return { ...state, selectedVideo: action.payload };
    } else if (action.type === 'LOAD_VIDEOS') {
        return { ...state, videos: action.payload };
    }
    return state;
};

export default video;