import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Allow all origins with defailt of cors(*)
app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
});
app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to databse");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
      //   return response.status(234).send("wlecome to MERN Stck Tutorial");
    });
  })
  .catch((error) => {
    console.log(error);
  });
