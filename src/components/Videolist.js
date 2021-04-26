import React from 'react';
import Videoitem from './Videoitem';
import { connect } from 'react-redux';

class Videolist extends React.Component {

    render() { 
        let list = this.props.videos.map(video => {
            return (
                <Videoitem
                    key={video.id.videoId} video={video}>
                </Videoitem>
            );
        });
        return <div className="ui list">{list}</div>;
    }
}

const mapStateToProps = state => {
    return { videos: state.video.videos };
}

export default connect(mapStateToProps)(Videolist);