import React, { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import { getOnePromptById } from "../../api/aiApi";

const GeFullScreen = () => {
  const getLoginData = () => {
    const data = localStorage.getItem("responceData");
    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  };
  const Navigate = useNavigate();
  const { id } = useParams();
  const [loginData, setLoginData] = useState(getLoginData());
  const [responceData, setResponceData] = useState({});

  useEffect(() => {
    const saveData = async () => {
      const responce = await getOnePromptById(loginData.Token, id);
      setResponceData(responce.data);
    };
    saveData();
  }, []);
  console.log(responceData);

  return (
    <>
      <div className="full-main">
        <div className="full-container">
          <div className="full-all">
            <h1>
              {Object.keys(responceData).length !== 0
                ? responceData.prompt
                : null}
            </h1>
            <p className="span">
              {Object.keys(responceData).length !== 0
                ? responceData.responce
                : null}
            </p>
            <div>
              <button onClick={()=>navigator.clipboard.writeText(responceData.prompt)}>copy prompt</button>
              <button onClick={()=>navigator.clipboard.writeText(responceData.responce)}>copy responce</button>
              <button onClick={()=>Navigate('/chatwithai')}>back to chat page</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeFullScreen;
