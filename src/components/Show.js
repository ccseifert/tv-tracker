import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { Consumer } from '../contexts/ShowContext';

const ShowWrapper = styled.div`
  /* width: 100%;
  background-image: url(${props => props.img}); */
`;

const ShowHeadlineImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const SeasonListHeader = styled.div`
  font-weight: bold;
`;

const SeasonList = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

const SeasonListName = styled.div`
  grid-column: span 2;
`;

const SeasonListCount = styled.div`
  grid-column: span 2;
`;

// const Show = () => (
class Show extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {context => (
          <ShowWrapper className="Show" img={context.show.backdrop_path}>
            <ShowHeadlineImage img={context.show.backdrop_path} />
            <h1>{context.show.name}</h1>
            <div className="num-seasons">
              <strong>Number of Seasons:</strong> {context.show.number_of_seasons}
            </div>
            <div className="num-episodes">
              <strong>Number of Episodes:</strong> {context.show.number_of_episodes}
            </div>
            <div className="overview">
              <strong>Overview:</strong> {context.show.overview}
            </div>

            {/* This looks like it should be a component */}
            <SeasonListHeader>
              <SeasonList>
                <SeasonListName>Season</SeasonListName>
                <SeasonListCount>Episode Count</SeasonListCount>
              </SeasonList>
            </SeasonListHeader>
            {context.show.seasons.map((season, index) => (
              <SeasonList key={index}>
                <SeasonListName>
                  <Link to={`/season/${context.show.id}/${season.season_number}`}>{season.name}</Link>
                </SeasonListName>
                <SeasonListCount>{season.episode_count}</SeasonListCount>
              </SeasonList>
            ))}
          </ShowWrapper>
        )}
      </Consumer>
    );
  }
}

export default Show;
