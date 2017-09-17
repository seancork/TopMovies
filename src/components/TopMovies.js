import React  from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const TopMovies = ({tops}) =>(
  <Link to={`/MovieDetails/${tops.id}`}>
   <ul>
    <li><a href=""><img alt={tops.name} src={tops.image} /></a></li>
   </ul>
  </Link>
    );

    TopMovies.propTypes = {
    	tops: PropTypes.shape({
    	   name: PropTypes.string.isRequired,
    	}).isRequired,
    };
export default TopMovies;