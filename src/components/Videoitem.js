import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../redux/actions';

class Videoitem extends React.Component {

    onSelectVideo = () => {
        this.props.selectVideo(this.props.video);
    }

    render() {
        return (
            <div className="item" style={{display: 'flex', alignItems: 'center'}}>
                <img alt='vid' className="ui image" src={this.props.video.snippet.thumbnails.medium.url}
                    style={{maxWidth: '150px', cursor: 'pointer'}} onClick={this.onSelectVideo} />
                <div className="content">
                    <p className="header">{this.props.video.snippet.title}</p>
                </div>
            </div>
        );
    }
}

export default connect(null, { selectVideo })(Videoitem);