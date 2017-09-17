import React from 'react';
import PropTypes from 'prop-types';
import top from '../top-movies.json';
import { Link } from "react-router-dom";

const MovieDetails = ({ match: { params: { Id } } }) => {
const m = top.find(_m => _m.id === parseInt(Id,10));

return (
 <div className="movie-container">
  <div className="image">
    <img src={m.image} alt="{m.name}" />
  </div>
  <div className="content">
    <h1>{m.name}</h1><span class="year">{m.released}</span>
    <div className="details">
      <p><b>Directed By: {m.directedBy}</b></p>
      <p>{m.description}</p>
      <iframe width="470" title={m.name} height="315" src={m.trailer} frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
  <div className="footer">
   <Link to="/">Back</Link>
    <span className="website">seanoneill.me</span>
  </div>
</div>
    );
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      Id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
export default MovieDetails;