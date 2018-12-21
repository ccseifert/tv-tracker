import React from 'react';
// import theMovieDb from 'themoviedb-javascript-library';
import Show from './Show';
import ShowContext from '../contexts/ShowContext';

class ShowPage extends React.Component {
  componentDidMount() {
    // console.log('id: ' + this.props.tvId);
    this.context.getShow(this.props.tvId);
  }

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
ShowPage.contextType = ShowContext;

export default ShowPage;
