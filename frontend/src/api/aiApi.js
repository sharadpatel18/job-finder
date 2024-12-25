import Axios from "axios";

const instance = Axios.create({
  baseURL: "http://localhost:8000/ai",
});

const chatWithAiApi = async (Token, prompt, userId) => {
  try {
    const responce = await instance.post(
      "/chat",
      { prompt, userId },
      {
        headers: {
          'authorization': `${Token}`,
        },
      }
    );

    return responce;
  } catch (error) {
    console.log(error);
  }
};

const getPromptBtId = async (Token, userId) => {
  try {
    console.log(`${Token}`);

    const responce = await instance.post(`/getpromptbyid/${userId}`, null , {
      headers: {
        'authorization': `${Token}`,
      },
    });
    return responce;
  } catch (error) {
    console.log(error);
  }
};

const getOnePromptById = async (Token, id) => {
  try {
    console.log(Token);
    const responce = await instance.post(`/getoneprompt/${id}`, null , {
      headers: {
        'authorization': `${Token}`,
      },
    });
    return responce;
  } catch (error) {
    console.log(error);
  }
};

export { chatWithAiApi, getPromptBtId, getOnePromptById };
