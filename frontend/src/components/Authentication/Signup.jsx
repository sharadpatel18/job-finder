import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SignupApi } from "../../api/authApi";
import SignupAdmin from "../MiniComponents/SignupAdmin";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminData, setAdminData] = useState({});
  const [responceData , setResponceData] = useState({})
  const [responceShow , setResponceShow] = useState(false)

  const handleAdminData = (data) => {
    setAdminData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await SignupApi({
      name: name,
      email: email,
      password: password,
      isAdmin: isAdmin,
      companyName: adminData.companyName,
      companyCapacity: adminData.companyCapacity,
      companyLocation: adminData.companyLocation,
    });
    setResponceData(data.data);
  };
  
  useEffect(()=>{
    if (responceData.success == true) {
      setResponceShow(true)
    }
  },[responceData])

  useEffect(()=>{
      setTimeout(()=>{
        setResponceShow(false)
      },3000)
  },[responceShow])

  return (
    <div className="auth-main flex-col">
      <div>
          <h1 className="text-3xl text-red-500 text-wrap">{(responceShow == true) ? responceData.message : null }</h1>
      </div>
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Sign up</h1>
          </div>
          <div className="name">
            <input
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isAdmin == true ? (
            <SignupAdmin handleAdminData={handleAdminData} />
          ) : null}
          <ul>
            <li className="flex justify-between items-center text">
              {" "}
              <label htmlFor="" className="label">
                Are You Admin
              </label>
              <input
                type="checkbox"
                className="input"
                value={isAdmin}
                onChange={(e) => {
                  setIsAdmin(
                    isAdmin == false
                      ? true
                      : false || isAdmin == true
                      ? false
                      : true
                  );
                }}
              />
            </li>
          </ul>
          <div className="flex w-1/2 justify-evenly">
            <button>Submit</button>
            <div className="link">
              <Link to="/login">Go To Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
