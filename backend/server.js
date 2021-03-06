require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
var cors = require("cors");

const app = express();

// DATA BASE CONNECTION
const connectDB = require("./config/DataBase");

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
// app.use(morgan());

// Routing is Here
app.use(require("./routes"));

// public folder for inserting the images uploader
app.use(express.static(__dirname + "/public/imagesUploader"));

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    err
        ? console.log(`SERVER CONNECTION FAILD AT ${err}`)
        : console.log(
              `SERVER CONNECTION SUCCESS !!!
SERVER RUNNIG ON PORT ${PORT}`
          );
});
