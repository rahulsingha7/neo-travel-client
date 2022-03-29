import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Booking.css'
import useAuth from '../../../hooks/useAuth';
const Booking = () => {
    const {user} =useAuth();
    const{serviceId} = useParams();
    const [services,setServices] = useState({});
    useEffect(()=>{
        fetch(`https://radiant-brook-06218.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
     const nameRef = useRef();
     const emailRef = useRef();
     const addressRef = useRef();
     const dateRef = useRef();
     const priceRef = useRef();
     const handleBooking = (e) =>{
         const name = nameRef.current.value;
         const email = emailRef.current.value;
         const address = addressRef.current.value;
         const date = dateRef.current.value;
         const price = priceRef.current.value;
         const booking = {name,email,address,date,price};
         booking.status = "pending";
         console.log(booking)
         fetch('https://radiant-brook-06218.herokuapp.com/bookings',{
             method: 'POST',
             headers: {
                'content-type': 'application/json'
             },
             body: JSON.stringify(booking)
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.insertedId){
                 alert('Successfully booked');
                 e.target.reset();
             }
         })
         e.preventDefault();
     }     
        return (
        <div className='my-5'>
          <div className='row'>
              <div className='col-lg-6'>
              <img src={services?.img}/>
              <h1>{services?.Name}</h1>
              <p>{services?.Description}</p>
              <h1>${services?.Price}</h1>
              </div>
              <div className='col-lg-6 addServices'>
              <h1>Booking Info</h1>
             <form onSubmit={handleBooking}>
                 <input type="text" ref={nameRef} value={user?.displayName} />
                 <input type="email" ref={emailRef} value={user?.email} />
                 <textarea type="text" ref={addressRef}  placeholder='address' required/>
                 <input type="date" ref={dateRef}  required/>
                 <input type="number" ref={priceRef} value={services?.Price}  />
                 <input type="submit" value="Submit" />
             </form>
              </div>
              </div>       
        </div>
    );
};

export default Booking;