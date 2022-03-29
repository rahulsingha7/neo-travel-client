import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Admin from '../Admin/Admin';
import './AddServices.css'
const AddServices = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        axios.post('https://radiant-brook-06218.herokuapp.com/services',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Inserted Successfully');
                reset();
            }
        })
    }
    return (
            <div className="overflow-hidden">
      <div className='row'>
          <div className='col-md-2 col-1'>
          <Admin></Admin>
          </div>
          <div className='col-md-10 addServices my-5'>
          <h1 >Add Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name",{required:true,maxLength:30})} placeholder="name" />    
      <input {...register("Description")} placeholder="description" />    
      <input {...register("Price")} placeholder="price" />    
      <input {...register("img")} placeholder="img url" />    
      
      <input type="submit" />
    </form>
          </div>
      </div>
    </div>
    );
};

export default AddServices;