import React, { useEffect, useState } from "react";
import { chatWithAiApi, getPromptBtId } from "../../api/aiApi";
import { useNavigate } from "react-router-dom";

const ChatWithAI = () => {
  const getLoginData = () => {
    const data = localStorage.getItem("responceData");
    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  };
  const [loginData, setLoginData] = useState(getLoginData());
  const [chatResponce, setChatResponce] = useState({});
  const [prompt, setPrompt] = useState("");
  const [loader, setLoader] = useState("");
  const [promptData, setPromptData] = useState([]);
  const Navigate = useNavigate()
  const handleClick = async () => {
    setLoader("Loading.......");
    const data = await chatWithAiApi(loginData.Token, prompt, loginData.id);
    setChatResponce(data.data);
    setPrompt("");
  };

  useEffect(() => {
    const saveData = async () => {
      const PromptData = await getPromptBtId(loginData.Token, loginData.id);
      setPromptData(PromptData.data);
    };
    saveData();
  }, []);

  useEffect(() => {
    setLoader("");
    const saveData = async () => {
      const PromptData = await getPromptBtId(loginData.Token, loginData.id);
      setPromptData(PromptData.data);
    };
    saveData();
  }, [chatResponce]);

  const handleGetOnePrompt = (id) => {
    Navigate(`/fullscreen/${id}`)
  }

  return (
    <>
       <div className="about-start">
        <div className="about-color">
          <h1>Chat With AI</h1>
        </div>
      </div>
      <div className="chat-main">
        <div className="chat-history">
          {promptData.map((item) => {
            return (
              <div className="chat-h" onClick={()=>handleGetOnePrompt(item._id)}>
                <h1>{item.prompt}</h1>
              </div>
            );
          })}
        </div>
        <div className="chat">
          <div>
            <h1 className="text-3xl m-4 "><u>CHAT WITH <b>CHATGTP</b></u></h1>
          </div>
          <div className="chat-responce">
            <h1> {loader} </h1>
            <h1>
              {Object.keys(chatResponce).length !== 0
                ? chatResponce.role
                : null}
            </h1>
            <span>
              {Object.keys(chatResponce).length !== 0
                ? chatResponce.content
                : null}
            </span>
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="enter your problems"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWithAI;
