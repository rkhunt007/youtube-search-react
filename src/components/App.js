import React from 'react';
import Searchbar from './Searchbar';
import Videodetail from './Videodetail';
import Videolist from './Videolist';
import { connect } from 'react-redux';
import { fetchVideos } from '../redux/actions'

class App extends React.Component {

    render() {
        return (
            <div className='ui container' style={{marginTop: '1%'}}>
                <Searchbar>
                </Searchbar>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <Videodetail>
                            </Videodetail>
                        </div>
                        <div className='five wide column'>
                            <Videolist>
                            </Videolist>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default connect(null, { fetchVideos })(App);