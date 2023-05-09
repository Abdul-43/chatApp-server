const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);
try {
  mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PW}@cluster0.hjak5fb.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  console.log('MongoDb connected 💫')
}
catch (err) {
  console.log(err)
}
