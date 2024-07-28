require("dotenv").config();
const express = require('express');
const app = express();
const authRouter= require('./router/auth-router');
const contactRouter=require("./router/contact-router");
const databaseConnect= require('./utils/db');
const cors = require('cors');



app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD", 
  credentials: true,
};

app.use(cors(corsOptions));






app.use("/api/auth",authRouter);
app.use("/api/authContact",contactRouter);



const port = 3000;

databaseConnect().then(()=>{
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
