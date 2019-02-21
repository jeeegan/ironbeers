import React from 'react';

const BeerRow = (props) => {

  return(
    <div key={props.id} style={{display: "flex", padding: "10px 40px", borderBottom: "1px solid lightgrey"}}>
      <img src={props.imageURL} alt={props.name} style={{height: "20vh", padding: "5px 20px"}}/>
      <span>
        <div style={{padding: "20px"}}>
          <h1>{props.name}</h1>
          <h3>{props.tagline}</h3>
          <h5>Contributed by: {props.contributed_by}</h5>
        </div>
      </span>
    </div>
  )
};

export default BeerRow;