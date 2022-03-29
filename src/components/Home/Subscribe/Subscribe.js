import React from 'react';
import { Button } from 'react-bootstrap';
const Subscribe = () => {
    return (
        <div className='my-5 bg-dark text-white'>
        <div>
            <h1 className='pt-5'>Subscribe To The Newsletter</h1>
            <div className="mb-3 ">
    <input className='mx-auto w-50' type="email"  placeholder='Enter Your Email'/>
   </div>
        </div>
         <Button variant="light" className='mb-5'>Subscribe</Button>
        </div>
    );
};

export default Subscribe;