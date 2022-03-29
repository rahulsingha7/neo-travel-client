
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Admin from '../Admin/Admin';

const AllServices = () => {
    const [allServices,setAllServices] = useState([]);
    useEffect(()=>{
        fetch(`https://radiant-brook-06218.herokuapp.com/services`)
        .then(res=>res.json())
        .then(data=>setAllServices(data));
    },[])
    const handleDeleteServices = id =>{
      const proceed =window.confirm('Are you sure?');
      if(proceed){
        const url = `https://radiant-brook-06218.herokuapp.com/services/${id}`;
        fetch(url,{
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount>0){
           alert('deleted successfully');
            const remainingServices = allServices.filter(allservice=>allservice._id!==id)
            setAllServices(remainingServices);
          }
        })
      }
    }
    return (
        <div className="overflow-hidden">
        <div className='row'>
      <div className='col-md-2 col-1'>
      <Admin></Admin>
      </div>
      <div className='col-md-10 my-5'>
       <Table striped bordered hover variant="dark"
      
       >
       <thead>
         <tr>
           <th>Name</th>
           <th>Img</th>
           <th>Description</th>
           <th>Price</th>
           <th>Action</th>
         </tr>
       </thead>
         {
            allServices.map(services=> <tbody
              key={services._id}>
             <tr>
           <td>{services.Name}</td>
           <td><img src={services.img} alt="" style={{height:'40px'}} /></td>
           <td>{services.Description}</td>
           <td>{services.Price}</td>
           <td><Link to={`/services/${services._id}`}>
           <button className='btn btn-warning'>Update</button>
           </Link>
           <button onClick={()=>handleDeleteServices(services._id)} className='btn btn-danger ms-5'>Delete</button>
           </td>
         </tr>
       </tbody> )
         }
         
     </Table>
      </div>
  </div>
</div>
    );
};

export default AllServices;