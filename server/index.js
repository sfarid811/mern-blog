import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from "dotenv";
dotenv.config();
const app = express();


app.use(cors());
// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(
  //   express.urlencoded({
    //     limit: "30mb",
    //     extended: true,
    //   })
    // );
    app.use(express.json());
    app.use('/posts',postRoutes);

const CONNECTION_URL = "mongodb+srv://sfarid811:Saad.2016@cluster0.dbyqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

