import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/notfound/error-404-concept-landing-page_52683-12870 (1).jpg'
const NotFound = () => {
    return (
        <div>
            <img src={img} alt=""/>
            <div>
               <Link to="/">
               <Button variant='danger'>Back To Home</Button>
               </Link>
            </div>
        </div>
    );
};

export default NotFound;