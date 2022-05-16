const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is listening");
})