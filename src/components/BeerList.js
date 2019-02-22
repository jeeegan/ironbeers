import React, { Component } from 'react';
import Header from './Header';
import BeerRow from './BeerRow';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from './Search';

class BeerList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: [],
      search: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getBeers();
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevState.search !== this.state.search) {
      this.getBeers();
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  getBeers() {
    let url = this.state.search.length === 0 ? "https://ironbeer-api.herokuapp.com/beers/all" : `https://ironbeer-api.herokuapp.com/beers/search?q=${this.state.search}`
    axios.get(url)
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
        <Search value={this.state.search} onChange={this.handleChange}/>
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