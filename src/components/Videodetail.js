import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../redux/actions';

class Videodetail extends React.Component {

    render() {

        const selectedVid = this.props.selectedVideo;
        if (selectedVid) {
            const vidSrc = 'https://www.youtube.com/embed/' + selectedVid.id.videoId;
            return (
                <div>
                    <div className='ui embed'>
                        <iframe src={vidSrc} title='video' />
                    </div>
                    <div className='ui segment'>
                        <h4 className='ui header'>{selectedVid.snippet.title}</h4>
                        <p>{selectedVid.snippet.description}</p>
                    </div>
                </div>
            );
        }
        return <div>
            Loading...
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        selectedVideo: state.video.selectedVideo
    }
}

export default connect(mapStateToProps, { selectVideo } )(Videodetail);