import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import CreateBeer from './components/CreateBeer';
import SingleBeer from './components/SingleBeer';
import BeerList from './components/BeerList';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/all-beers" component={BeerList}/>
            {/* <Route exact path="/random-beer" component={SingleBeer} /> */}
            <Route exact path="/random-beer" render={props => <SingleBeer {...props} random />} />
            <Route exact path="/add-beer" component={CreateBeer} />
            <Route exact path="/beer/:id" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
