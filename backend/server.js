require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const app = express();

// DATA BASE CONNECTION
const connectDB = require("./config/DataBase");

connectDB();

app.use(express.json());
// app.use(morgan());

// Routing is Here
app.use(require("./routes"));

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
