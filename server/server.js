const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;

app = express();
const playRoute = require("./routes/mainRoute");

// Server
app.listen(port, () => {
  console.log(`Hangman backend listening at Port ${port}`);
});

// Middlewares
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: "Content-Type,Authorization"
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/", mainRoute);
