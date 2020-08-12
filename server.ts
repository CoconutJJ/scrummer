import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import mysql from 'mysql'

const app = express();

const PORT = 3000;



dotenv.config(
    {
        path: process.env.NODE_ENV.toUpperCase() == "PRODUCTION" ? "production.env" : "development.env"
    }
);

app.use('/static', express.static(path.join(process.env.BASE_PATH, "assets")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(PORT, () => {
    console.log("App started on port " + PORT.toString())
})

export default app;