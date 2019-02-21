import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class CreateBeer extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.addBeer = this.addBeer.bind(this);
  }
  
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  addBeer(event) {
    event.preventDefault()
    axios.post("https://ironbeer-api.herokuapp.com/beers/new", this.state)
      .then(res => console.log(res))
      .catch(console.log)
  }

  render() {
    return(
      <div>
        <Header />
        <h1 style={{padding: "5%"}}>Add New Beer</h1>
        <div style={{display: "flex", flexDirection: "column", padding: "0 5%"}}>
          <Form onSubmit={this.addBeer}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}/>
            </FormGroup>
            <FormGroup>
              <Label for="tagline">Tagline</Label>
              <Input type="text" name="tagline" value={this.state.tagline} onChange={e => this.handleChange(e)}/>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)}/>
            </FormGroup>
            <FormGroup>
              <Label for="first_brewed">First Brewed</Label>
              <Input type="text" name="first_brewed" value={this.state.first_brewed} onChange={e => this.handleChange(e)}/>
            </FormGroup>
            <FormGroup>
              <Label for="brewers_tips">Brewers Tips</Label>
              <Input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={e => this.handleChange(e)}/>
            </FormGroup>
            <FormGroup>
              <Label for="attenuation_level">Attenuation Level</Label>
              <Input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={e => this.handleChange(e)}/>
            </FormGroup>
            <FormGroup>
              <Label for="contributed_by">Contributed By</Label>
              <Input type="text" name="contributed_by" value={this.state.contributed_by} onChange={e => this.handleChange(e)}/>
            </FormGroup>  
            <Button style={{backgroundColor: "#00a5ff", width: "50%"}}>Add</Button>
          </Form>
        </div>
      </div>
    )
  }

};

export default CreateBeer;