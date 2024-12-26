const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRoutes = require('./Routes/AuthRoute')
const AiRoutes = require('./Routes/AIRoutes')
const JobRoutes = require('./Routes/JobRoutes')
const Connection = require('./Utilities/connection')
const app = express();

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use('/auth' , AuthRoutes);
app.use('/ai' , AiRoutes);
app.use('/job' , JobRoutes);

app.listen(process.env.PORT , ()=>{
    console.log("server is started!!!!!!!!!");
})