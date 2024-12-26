import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const getResponceData = () => {
    const data = localStorage.getItem("responceData");
    if (data) {
      return JSON.parse(data);
    }else{
      return {}
    }
  };

  const [responceData, setResponceData] = useState(getResponceData());
  const [responceShow, setResponceShow] = useState(false);

  useEffect(() => {
    if (responceData.success == true) {
      setResponceShow(true);
    }
  }, [responceData]);

  return (
    <>
      <div className="nav-main">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={Logo} alt="err" />
          </div>
          <div className="nav-components">
            <ul className="flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/findjob">Find a Jobs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/chatwithai">Chat With AI</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              {
                responceData.isAdmin == true 
                ?
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                :
                null
              }
            </ul>
          </div>
          {responceShow == true ? (
            <div className="nav-login flex">
              <div className="nav-h1">
                 <h1>{responceData.name}</h1>
              </div>
              <div>
                <Link to='/signup'>Logout</Link>
              </div>
            </div>
          ) : (
            <div className="nav-login flex">
              <div>
                <Link to="/signup">Signup</Link>
              </div>
              <div>
                <Link to="/login">Login</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
