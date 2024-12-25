const { chatWithAi, getPromptBtId, getOnePromptById } = require("../Controllers/AIControllers");
const { Authentication } = require("../Middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/chat" , Authentication , chatWithAi);
router.post("/getpromptbyid/:id" , Authentication  , getPromptBtId );
router.post("/getoneprompt/:id" , Authentication , getOnePromptById);

module.exports = router