import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class SingleBeer extends Component {

  state = {
    name: "",
    tagline: "",
    first_brewed: "",
    attenuation_level: "",
    description: "",
    contributed_by: "",
    imageURL: ""
  }

  componentDidMount() {
    this.getBeer();
  }

  getBeer() {
    if(this.props.match.path.startsWith('/beer')) {
      axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          name: res.data.name,
          tagline: res.data.tagline,
          first_brewed: res.data.first_brewed,
          attenuation_level: res.data.attenuation_level,
          description: res.data.description,
          contributed_by: res.data.contributed_by,
          imageURL: res.data.image_url
        });
      })
      .catch(console.log);
    } else {
      axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then((res) => {
        this.setState({
          name: res.data[0].name,
          tagline: res.data[0].tagline,
          first_brewed: res.data[0].first_brewed,
          attenuation_level: res.data[0].attenuation_level,
          description: res.data[0].description,
          contributed_by: res.data[0].contributed_by,
          imageURL: res.data[0].image_url
        });
      })
      .catch(console.log);
    }

  }

  render() {
    return(
      <div>
        <Header />
        <div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={this.state.imageURL} alt={this.state.name} style={{height: "40vh"}}/>
          </div>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", margin: "10%"}}>
            <h1>{this.state.name}</h1>
            <h3>{this.state.tagline}</h3>
            <h4>{this.state.first_brewed}</h4>
            <h5>{this.state.attenuation_level}</h5>
            <p>{this.state.description}</p>
            <p>{this.state.contributed_by}</p>
          </div>
        </div>
      </div>
    )
  }

};

export default SingleBeer;