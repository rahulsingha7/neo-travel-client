import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Admin from '../Admin/Admin';

const ManageClient = () => {
     const [manageClient,setManageClient] = useState([]);
     const [show,setShow] = useState(false);
     const [manageStatus,setManageStatus] = useState([]);
     useEffect(()=>{
         fetch('https://radiant-brook-06218.herokuapp.com/bookings')
         .then(res=>res.json())
         .then(data=>setManageClient(data));
     },[])
     const handleChange = e=>{
       console.log(e.target.name,e.target.value);
       const data = {...manageStatus};
       data[e.target.name] = e.target.value;
      setManageStatus(data);
      setShow(true);
     }
     const handleStatus =(id) =>{
       const url =`https://radiant-brook-06218.herokuapp.com/bookings/${id}`
       fetch(url,{
         method:'PUT',
         headers:{
           'content-type':'application/json'
         },
         body: JSON.stringify(manageStatus)
       })
       .then(res=>{
              if(res){
                alert('Your status have been updated');
              }
            
          })
     }
    return (
        <div className="overflow-hidden">
        <div className='row'>
      <div className='col-md-2 col-1'>
      <Admin></Admin>
      </div>
      <div className='col-md-10 my-5'>
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
         {
            manageClient.map(client=> <tbody
              key={client._id}>
             <tr>
           <td>{client.name}</td>
           <td>{client.email}</td>
           <td>{client.date}</td>
           <td>{client.address}</td>
           <td>{client.price}</td>
           {/* <td>{client.status}</td> */}
           <td><select value={client.status} onChange={handleChange} className="form-control text-center" name="status">
             <option>pending</option>
             <option>Approved</option>
             <option>Rejected</option>
             </select></td>
          {
            show &&  <td><Button onClick={()=>handleStatus(client._id)} variant='warning'>Update</Button></td>
          }
         </tr>
       </tbody> )
         }
         
     </Table>
      </div>
  </div>
</div>
    
    );
};

export default ManageClient;