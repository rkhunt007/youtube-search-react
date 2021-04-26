import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../redux/actions';

class Searchbar extends React.Component {

    state = { term: '' };

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        // this.props.onSubmit(this.state.term);
        this.props.fetchVideos(this.state.term);

    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onSubmit}>
                    <div className='field'>
                        <label>Video search</label>
                        <input type='text'
                            value={this.state.term}
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {fetchVideos})(Searchbar);