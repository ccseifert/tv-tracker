import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { show: state.setShow.show, season: state.setSeason.season };
};

const SeasonWrapper = styled.div`
  /* width: 100%;
  background-image: url(${props => props.img}); */
`;

const SeasonHeadlineImage = styled.div`
  width: 100%;
  height: 400px;
  /* background-image: url(${props => props.img}); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Season = ({ show, season }) => (
  <SeasonWrapper className="Show">
    {/* <SeasonHeadlineImage img={season.backdrop_path} /> */}
    <SeasonHeadlineImage />
    <h1>
      {show.name} - {season.name}
    </h1>

    {/* {show.seasons.map((season, index) => (
    <div key={index}>{season.name}</div>
    ))} */}
  </SeasonWrapper>
);

export default connect(
  mapStateToProps,
  null
)(Season);
