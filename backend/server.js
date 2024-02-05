require('dotenv').config() // use enviroment variables from .env, to hide from the user
const express = require('express')
const dreamsRouter = require('./routes/dreamsRouter') // CRUD API methods
const { connectDB } = require('./db') //connect to mongoDB

const app = express()
app.use(express.json()) // parse json from the request

/** connect to DB, and then listen to PORT */
connectDB((err) => {
    if (!err) {
        app.listen(process.env.PORT, () => {
            console.log(`app listening on port ${process.env.PORT}`);
        })
    }
})

app.use('/api/dreams', dreamsRouter); // use the dreamsRouter API, if the URL is '/api/dreams'