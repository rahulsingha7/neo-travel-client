import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id,Name,Description,img} = props.service;
    return (
        <div>
          <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{Name}</Card.Title>
                  <Card.Text>
                    {Description}
                  </Card.Text>
                <Link to={`/booking/${_id}`}>
                <Button variant="warning">Book Now</Button>
                </Link>
                </Card.Body>
              </Card>  
        </div>
    );
};

export default Service;