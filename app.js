const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();
const Port = process.env.PORT;
const dbConnect = require('./config/db')
const bookRouter = require('./routes/book.route')
const app = express();
dbConnect();
app.use(cors())
app.use(bodyParser.json())
app.use("/api", bookRouter)
app.listen(Port, () => {
    console.log('Server is running : ', Port);
})