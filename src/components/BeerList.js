import React, { Component } from 'react';
import Header from './Header';
import BeerRow from './BeerRow';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BeerList extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    this.getBeers()
  }

  getBeers() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
      .then((res) => {
        this.setState({
          beers: res.data
        });
      })
      .catch(console.log);
  }

  render() {
    return(
      <div>
        <Header />
        {this.state.beers.map( beer => 
          <Link key={beer._id} to={`/beer/${beer._id}`}>
            <BeerRow imageURL={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
              contributed_by={beer.contributed_by}
              
            />
          </Link>
          )}
      </div>
    )
  }
};

export default BeerList;