require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors({ origin: true, credentials: true }));

// DATA BASE CONNECTION
const connectDB = require("./config/DataBase");

connectDB();

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
