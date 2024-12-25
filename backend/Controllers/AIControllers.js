const openAi = require("openai");
const AiChat = require("../Model/AiModel");

const chatWithAi = async (req, res) => {
  const { prompt, userId } = req.body;
 

  const existedResponce = await AiChat.findOne({
    prompt: prompt,
    userId: userId,
  });

  const config = new openAi({
    apiKey: process.env.CHATGTP_APIKEY,
  });

  const completion = config.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `${prompt}`,
      },
    ],
  });

  completion.then(async (result) => {
    let responce = result.choices[0].message;

    if (existedResponce) {
      return res
        .status(201)
        .json({ role: "assistent", content: existedResponce.responce });
    } else {
      const saveChatResponce = await AiChat.create({
        prompt: prompt,
        responce: result.choices[0].message.content,
        userId: userId,
      });
      return res.send(result.choices[0].message);
    }
  });
};

const getPromptBtId = async (req, res) => {
  try {
    const { id } = req.params;
    const responce = await AiChat.find({ userId: id });
    res.send(responce);
  } catch (error) {
    console.log(error);
  }
};


const getOnePromptById = async (req,res) => {
  try {
    const {id} = req.params;
    const responce = await AiChat.findOne({_id:id});
    res.send(responce);
  } catch (error) {
    console.log(error);    
  }
}

module.exports = { chatWithAi, getPromptBtId , getOnePromptById};
