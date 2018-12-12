import React from 'react';
import { Router, Link } from '@reach/router';
import Home from './Home';
import ShowPage from './ShowPage';
import SeasonPage from './SeasonPage';
import { Provider } from 'react-redux';
import store from '../store/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            <Link to="/">Home</Link>
            <Link to="/show/1396">Breaking Bad</Link>
            <Link to="/search">
              <span aria-label="Search" role="img">
                🔍
              </span>
            </Link>
          </header>
          <Router>
            <Home path="/" />
            <ShowPage path="/show/:tvId/" />
            <SeasonPage path="/season/:tvId/:seasonId" />
            {/* <Results path="/results" />
          <Season path="/season/:tv-id/:tv-season-id" />
          <Episode path="/episode/:tv-id/:tv-season-id/:tv-episode-id" />
          <Search path="/search" /> */}
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
