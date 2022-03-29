import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import img1  from '../../../images/gallery/gallery1.jpg';
import img2  from '../../../images/gallery/gallery2.jpg';
import img3  from '../../../images/gallery/gallery3.jpg';
import img4  from '../../../images/gallery/gallery4.jpg';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-dark mt-5 overflow-hidden py-5'>
          <div className='row'>
          <div className="col-lg-3 col-12 text-white py-2 ">
              <h5>Quick Links</h5>
              <Nav.Link className='text-warning' as={HashLink} to="/login">Login</Nav.Link>
              <Nav.Link className='text-warning' as={HashLink} to="/myOrder">My Order</Nav.Link>
              <Nav.Link className='text-warning'  as={HashLink} to="/home#galleries" >Gallery</Nav.Link>
              </div>
            <div className="col-lg-3 col-12 text-white py-2">
               <h5 >Latest News</h5>
               <p className='text-warning'>South Africa ends PCR test rule for vaccinated travellers</p>
               <p className='text-warning'>Kyte to Provide NDC Content to App in the Air</p>
             </div>
            <div className="col-lg-3 col-12 text-white py-2 footer">
              <h5>Gallery</h5>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <div>
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              </div>
                </div>
             <div className="col-lg-3 col-12 py-2 text-white">
                 <h5 className='pb-3'> Follow Us On</h5>
                 <i className='text-white fab fa-2x fa-facebook pe-3'></i>
                 <i className='text-white fab fa-2x fa-twitter pe-3'></i>
                 <i className='text-white fab fa-2x fa-instagram pe-3'></i>
                 <i className='text-white fab fa-2x fa-snapchat'></i>
                 </div>
        </div>
        </div>
    );
};

export default Footer;