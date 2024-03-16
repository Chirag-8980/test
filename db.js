const mongoose = require('mongoose');

// Replace <connection-string> with your actual MongoDB Atlas connection string
const connectionString = 'mongodb+srv://chirag:vPzacHafYSFWdtFa@potfolio.7hxzrpb.mongodb.net/?retryWrites=true&w=majority&appName=Potfolio';
// const connectionString = 'mongodb://127.0.0.1:27017';

// Connect to MongoDB Atlas
mongoose.connect(connectionString, {
    dbName: 'portfolio'
})
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });
