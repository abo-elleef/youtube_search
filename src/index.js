import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyB3iNJP1pK1_joAagBfoNDk3Qz1TBJHhNg\t';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos: [], selectedVideo: null};
        this.doSearch('البردة')
    }
    doSearch (text) {
        YTSearch({key: API_KEY, term: text}, (videos) => {
            this.setState({ videos: videos, selectedVideo: videos[0] });
        });
    }
    render() {
        const debouncedSearch = _.debounce((term) => {this.doSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={debouncedSearch} />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelected={ selectedVideo => {this.setState({ selectedVideo })}}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));