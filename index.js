require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const path = require("path")

const router = require("./routers/index.js")
const errorHandler = require("./middleware/errorHandlingrMiddleware")

const app = express()
const port = process.env.PORT || 8000;

const buildPath = path.join(__dirname, '/build');
app.use(express.static(buildPath));


app.use(cors({ origin: '*' }));
app.options('*', cors());
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
app.use(express.json());
app.use(cookieParser());

app.use("/api", router)
app.get("/*", (_, res) => { res.sendFile(path.join(__dirname, "/build/index.html")) });

app.use(errorHandler)



const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(port, () => console.log(`Im listening on ${port}`))
    } catch (e) {
        console.log(e);
    }
}
start()