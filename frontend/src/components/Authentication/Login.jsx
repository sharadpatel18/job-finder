import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginApi } from "../../api/authApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responceData, setResponceData] = useState({});
  const [responceShow, setResponceShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      return alert('email and password null')
    }
    const data = await LoginApi({ email: email, password: password });
    setResponceData(data.data)
  };

  useEffect(() => {
    if (responceData.success == true) {
      setResponceShow(true);
      localStorage.setItem("responceData", JSON.stringify(responceData));
      
    }
  }, [responceData]);
  
  useEffect(() => {
    setTimeout(() => {
      setResponceShow(false);
    }, 5000);
  }, [responceShow]);
  
  return (
    <div>
      <div className="auth-main flex-col">
        <div>
          <h1 className="text-3xl text-red-500 text-wrap">
            {responceShow == true ? responceData.message+" please reload this page!!" : null}
          </h1>
        </div>
        <div className="auth-container">
          <form onSubmit={handleSubmit}>
            <div>
              <h1>Login</h1>
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
            <div className="flex w-1/2 justify-evenly">
              <button>Submit</button>
              <div className="flex justify-evenly link">
                <Link to="/signup">create Account</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
