
import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
const Galleries = () => {
    const [galleries,setGalleries]=useState([]);
    useEffect(()=>{
        fetch('./gallery.json')
        .then(res=>res.json())
        .then(data=>setGalleries(data))
    },[])
    
    return (
        
        <div className='my-5' id="galleries">
            <h1 className='text-warning mb-5'>Visit Amazing Places</h1>
            {
                <Row sm={1} md={2} lg={3} className='g-3' >
                {
                    galleries.map(gallery=><Card
                    key={gallery.img}>
                    <Card.Img variant="top" src={gallery.img}/>
                  </Card>)
                }
                </Row>
            }
        </div>
    );
};

export default Galleries;