import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyB3iNJP1pK1_joAagBfoNDk3Qz1TBJHhNg\t';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos: []};
        YTSearch({key: API_KEY, term: 'البردة'}, (videos) => {
            console.log(videos)
            this.setState({ videos });
        });
    };

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetails video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector(".container"));