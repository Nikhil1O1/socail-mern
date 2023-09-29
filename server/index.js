import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config({ path: './config.env' });

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes); // all routes use /post prefix due to this

app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=>console.log(`Server running on port :${PORT}`)))
    .catch((err)=>console.log(err.message));

// mongoose.set('useFindAndModify', false);  not useful for mongoose v5 and above