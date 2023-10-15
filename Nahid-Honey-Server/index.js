const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const morgan = require('morgan')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const port = process.env.PORT || 5000


// middleware
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))


const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@atlascluster.gc9l4fl.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});





// middle were function for verify token 
function verifyJWT(req, res, next) {
    const authorization = req.headers.authorization
    console.log(authorization)
    if (!authorization) {
        return res.status(404).send({ error: 'unauthorized access' })
    }

    // // step 1. verify if the provided token id valid or not.
    const token = authorization.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        console.log(err)
        if (err) {
            return res.status(403).send({ error: 'unauthorized access' })
        }

        console.log({ decoded })
        req.decoded = decoded
        next()
    })
}






async function run() {
    try {

        const usersCollection = client.db('nahid-honey').collection('users')

          // Get user
          app.get('/users', async (req, res) => {
            const result = await usersCollection.find().toArray()
            res.send(result)
        })


        // save user 
        app.post('/users', async (req, res) => {
            const user = req.body
            const result = await usersCollection.insertOne(user)
            res.send(result)
        })


        // =================================
        // =================================


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Nahid Honey Server is running..')
})

app.listen(port, () => {
    console.log(`Nahid Honey is running on port ${port}`)
})