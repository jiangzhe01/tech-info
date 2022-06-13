const express = require("express");
const cors = require('cors')
const morgan = require('morgan')

const config = require("./config/index");

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan)

app.use((req, res)=> {
    res.send('hello world')
})

app.listen(config.app.port, () => {
  console.log(`server is running at http://localhost:${config.app.port}`);
});
