//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SubMenu
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine, RiAdminFill } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineManageAccounts } from "react-icons/md";

import { useHistory } from "react-router-dom"
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";

import './Admin.css'
import { Link } from "react-router-dom";

const Admin = () => {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  let history = useHistory();

  const [actives, setActive] = useState('');
  // const buttonHandler = () => {
  //   setActive(actives);
  // };
  const homeButton = () =>{
    setActive('home');
    history.push("/home");
  }

  const addService= () =>{
    setActive('addService');
    history.push("/addService");
  }

  const manageClient=() =>{
    setActive('manageClient');
    history.push("/manageClient");
  }
  const allServices=() =>{
    setActive('allServices');
    history.push("/allServices");
  }
  return (

   <div className="row">
     <div className="col-lg-4">
     <div id="header" >
      {/* collapsed props to change menu size using menucollapse state */}
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="logotext">
            {/* small and big change using menucollapse state */}
            <p>{menuCollapse ? "Admin" : "Admin"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {/* changing menu collapse icon on click */}
            {menuCollapse ? (
              <FiArrowRightCircle />
            ) : (
              <FiArrowLeftCircle />
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem onClick={homeButton} className={actives === 'home' ? "active" : "dactive"}  >
              Home
            </MenuItem>
            <MenuItem onClick={addService} >Add Services</MenuItem>
            <MenuItem onClick={manageClient}>Manage Client</MenuItem>
            <MenuItem onClick={allServices}>All Services</MenuItem>  
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
     </div>

   </div>

  );
};

export default Admin;