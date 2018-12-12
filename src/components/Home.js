import React from 'react';
import theMovieDb from 'themoviedb-javascript-library';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { name: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    theMovieDb.tv.getById({ id: 1396 }, this.successCB, this.errorCB);
  }
  errorCB(data) {
    console.log('Error callback: ' + data);
  }
  successCB(data) {
    console.log(JSON.parse(data));
  }

  // getNamesList() {
  //   return this.state.creators.map(function(object, i) {
  //     return <li key={i}>{object.firstname}</li>;
  //   });
  // }

  render() {
    return (
      <div className="Home">
        aa
        <button className="button" onClick={this.handleClick}>
          Click Me
        </button>
        <p>{this.state.name}</p>
        {/* <ul>{this.getNamesList()}</ul> */}
      </div>
    );
  }
}

export default Home;
