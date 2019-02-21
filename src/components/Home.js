import React from 'react';
import BeerCard from './BeerCard';

const Home = (props) => {
  return(
    <div>
      <BeerCard cardTitle="All Beers" cardText="View all beers in the database..."
        imgSrc="/all-beers.jpg" linkURL="/all-beers"/>
      <BeerCard cardTitle="Random Beer" cardText="View a random beer from the database..."
        imgSrc="/random-beer.jpg" linkURL="/random-beer"/>
      <BeerCard cardTitle="New Beer" cardText="Add a new beer to the database..."
        imgSrc="/add-beer.jpg" linkURL="/add-beer"/>
    </div>
  )
};

export default Home;