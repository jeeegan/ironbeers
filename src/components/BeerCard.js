import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const BeerCard = (props) => {
  return(
    <Link to={props.linkURL}>
      <div style={{cursor: "pointer", color: "black"}}>
        <Card>
          <CardImg src={props.imgSrc} alt={props.cardTitle} />
          <CardBody>
            <CardTitle style={{fontSize: "2.5em"}}>{props.cardTitle}</CardTitle>
            <CardText style={{fontSize: "1.5em"}}>{props.cardText}</CardText>
          </CardBody>
        </Card>
      </div>
    </Link>
  )
};

export default BeerCard;