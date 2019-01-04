import React from 'react';
import { Router } from '@reach/router';
import { Provider } from '../contexts/ShowContext';
import Home from './Home';
import ShowPage from './ShowPage';
import SeasonPage from './SeasonPage';
import Header from './Header';
import theMovieDb from 'themoviedb-javascript-library';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: {
        id: 0,
        name: 'test name',
        number_of_episodes: 0,
        number_of_seasons: 0,
        overview: '',
        backdrop_path: '',
        seasons: [],
      },
      season: {
        name: '',
      },
      getShow: this.getShow.bind(this),
    };
  }

  getShow(id) {
    console.log('getShow id: ' + id);
    theMovieDb.tv.getById({ id: id }, this.success.bind(this), this.error);
  }
  error(data) {
    console.log('Error callback: ' + data);
  }
  success(data) {
    let showData = JSON.parse(data);
    let show = {
      id: showData.id,
      name: showData.name,
      number_of_episodes: showData.number_of_episodes,
      number_of_seasons: showData.number_of_seasons,
      overview: showData.overview,
      backdrop_path: theMovieDb.common.images_uri + 'original' + showData.backdrop_path,
      seasons: showData.seasons,
    };

    this.setState({
      show,
    });

    console.log(this.state.show);
  }

  render() {
    return (
      <div>
        <Header />
        <Provider value={this.state}>
          <Router>
            <Home path="/" />
            <ShowPage path="/show/:tvId/" />
            <SeasonPage path="/season/:tvId/:seasonId" />
            {/* <Results path="/results" />
          <Season path="/season/:tv-id/:tv-season-id" />
          <Episode path="/episode/:tv-id/:tv-season-id/:tv-episode-id" />
          <Search path="/search" /> */}
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
