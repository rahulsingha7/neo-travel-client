import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://radiant-brook-06218.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='my-5' >
        <h1 className='text-warning mb-5'>Top Destination</h1>
        {
            <Row sm={1} md={2} lg={3} className='g-3' >
            {
                services.map(service=><Service
                key={service._id}
                service={service}
                ></Service>)
            }
            </Row>
        }
    </div>
    );
};

export default Services;