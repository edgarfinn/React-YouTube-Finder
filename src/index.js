import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import KEYs from './../keys.js';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = KEYs.YOUTUBE;


// Create a new component. This component should produce some html.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    // whenever constructor is run, a YTSearch API call is executed
    YTSearch({ key: API_KEY, term: 'surf boards'}, (videos) => {
      // update the state with the API request's response data
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    // Since key and value are identical,
    // you could also just use 'this.setState({ videos })''
    // This is an ES6 feature for key and value terms which are identical
      }
    );
  }

  render() {
    return (
      <div>

        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />

        {/* invoke an instance of VideoList,
          and pass the State's videos object to it */}
        <VideoList
          // set state.selectedVideo to the value of argument provided
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />

      </div>
    )
  }
}

// Take this component's generated HTML and put it in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
