require("dotenv").config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const connectDatabase = require("./config/db");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Error Handling
app.use(function (req, res, next) {
  res.status(404).json({
    error_message: "Page not found",
  });
});

// Default error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    error_message: "Something broke!",
  });
});
app.listen(PORT, () => console.log(`Server is running at PORT=${PORT}`));
