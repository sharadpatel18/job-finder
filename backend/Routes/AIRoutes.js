const { chatWithAi, getPromptBtId, getOnePromptById } = require("../Controllers/AIControllers");
const { Authentication } = require("../Middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/chat" , Authentication , chatWithAi);
router.get("/getpromptbyid/:id" , Authentication  , getPromptBtId );
router.get("/getoneprompt/:id" , Authentication , getOnePromptById);

module.exports = router