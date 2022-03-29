import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const MyOrder = () => {
    const {user} =useAuth();
    console.log(user);
        const [myOrder,setMyOrder] = useState([]);
        useEffect(()=>{
            fetch(`https://radiant-brook-06218.herokuapp.com/myOrder/${user?.email}`)
            .then(res=>res.json())
            .then(data=>setMyOrder(data));
        },[])
         const handleDeleteBooking = id =>{
           const proceed = window.confirm('Are you sure?');
           if(proceed){
               const url = `https://radiant-brook-06218.herokuapp.com/bookings/${id}`;
               fetch(url,{
                   method: 'DELETE'
               })
               .then(res=>res.json())
               .then(data=>{
                   if(data.deletedCount>0){
                       alert('deleted successfully');
                       const remainingBookings= myOrder.filter(myOrder=>myOrder._id!==id)
                       setMyOrder(remainingBookings);
                   }
               })
           }
         }
       return (
         <div>
          <Table responsive striped bordered hover variant="dark"
         
          >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Reg.Date</th>
              <th>Address</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
             myOrder.map((orders)=> (<tr 
                key={orders._id}> 
              <td>{orders?.name}</td>
              <td>{orders?.email}</td>
              <td>{orders?.date}</td>
              <td>{orders?.address}</td>
              <td>{orders?.price}</td>
              <td>{orders?.status}</td>
             <td><button onClick={()=>handleDeleteBooking(orders?._id)} className='btn btn-danger'>Delete</button></td>
            </tr>)
          )
            }
             </tbody>
        </Table>
         </div>
       
       );
   };
    

export default MyOrder;