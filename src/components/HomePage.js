import React from 'react';
import top from '../top-movies.json';
import TopMovies from './TopMovies';

const HomePage = () => {
  const top10movies = top.slice(0,10);
  return (
  	<div>
     {top10movies.map((topm, i) => (
     	<TopMovies
     	tops ={topm}
     	key={i}
     	/>
     	))}
    </div> 
     );};
export default HomePage;