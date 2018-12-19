import React from 'react';
import theMovieDb from 'themoviedb-javascript-library';
import Show from './Show';

class ShowPage extends React.Component {
  state = {
    show: {
      id: 0,
      name: '',
      number_of_episodes: 0,
      number_of_seasons: 0,
      overview: '',
      backdrop_path: '',
      seasons: [],
    },
  };

  componentDidMount() {
    theMovieDb.tv.getById({ id: this.props.tvId }, this.success, this.error);
  }
  error(data) {
    console.log('Error callback: ' + data);
  }
  success = data => {
    let showData = JSON.parse(data);

    this.props.addShow({
      show: {
        id: showData.id,
        name: showData.name,
        number_of_episodes: showData.number_of_episodes,
        number_of_seasons: showData.number_of_seasons,
        overview: showData.overview,
        backdrop_path: theMovieDb.common.images_uri + 'original' + showData.backdrop_path,
        seasons: showData.seasons,
      },
    });

    console.log(showData);
  };

  render() {
    return (
      <div>
        <Show />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ShowPage;
