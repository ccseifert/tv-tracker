import React from 'react';
import theMovieDb from 'themoviedb-javascript-library';
import Season from './Season';

class SeasonPage extends React.Component {
  state = {
    season: {
      name: '',
    },
  };

  componentDidMount() {
    theMovieDb.tvSeasons.getById({ id: this.props.tvId, season_number: this.props.seasonId }, this.success, this.error);
  }
  error(data) {
    console.log('Error callback: ' + data);
  }
  success = data => {
    let seasonData = JSON.parse(data);

    this.props.addSeason({
      season: {
        name: seasonData.name,
      },
    });

    console.log(seasonData);
  };

  render() {
    return (
      <div>
        <Season />
      </div>
    );
  }
}

export default SeasonPage;
