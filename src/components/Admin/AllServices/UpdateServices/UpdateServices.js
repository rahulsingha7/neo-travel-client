import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateServices.css'
const UpdateServices = () => {
    const{id} = useParams();
    const [allServices,setAllServices] = useState({});
    useEffect(()=>{
        const url = `https://radiant-brook-06218.herokuapp.com/services/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAllServices(data));
    },[]);
    const handleNameChange = e =>{
        const updatedName = e.target.value;
        const updatedService = {Name:updatedName,Description:allServices.Description,img:allServices.img,Price:allServices.Price}
        setAllServices(updatedService);
    }
    const handleDescriptionChange = e =>{
        const updatedDescription = e.target.value;
        const updatedService = {Name:allServices.Name,Description:updatedDescription,img: allServices.img,Price:allServices.Price}
        setAllServices(updatedService);
    }
    const handleImgChange = e =>{
        const updatedImage = e.target.value;
        const updatedService = {Name:allServices.Name,Description:allServices.Description,img: updatedImage,Price:allServices.Price}
        setAllServices(updatedService);
    }
    const handlePriceChange = e =>{
        const updatedPrice = e.target.value;
        const updatedService = {Name:allServices.Name,Description:allServices.Description,img: allServices.img,Price:updatedPrice}
        setAllServices(updatedService);
    }
    const handleUpdateService = e =>{
    
       const url = `https://radiant-brook-06218.herokuapp.com/services/${id}`;
       fetch(url,{
           method:'PUT',
           headers: {
            'content-type': 'application/json'
           },
           body: JSON.stringify(allServices)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.modifiedCount>0){
               alert('Updated Successfully');
               setAllServices({});
           }
       })
       e.preventDefault();
    }
       return(
       <div className='updateServices my-5'>
            <form>
                <input type="text" onChange={(e)=>handleNameChange(e)} value={allServices.Name|| ''} placeholder="name"/>
                <input type="text" onChange={(e)=>handleDescriptionChange(e)} value={allServices.Description|| ''} placeholder="description"/>
                <input type="text" onChange={(e)=>handleImgChange(e)} value={allServices.img|| ''} placeholder="img url"/>
                <input type="text" onChange={(e)=>handlePriceChange(e)} value={allServices.Price||''} placeholder="price"/>
                <input type="submit" onClick={(e)=>handleUpdateService(e)} value="Update" />
            </form>
        </div>
    );
};

export default UpdateServices;