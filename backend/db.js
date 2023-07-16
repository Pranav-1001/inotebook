const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://iNotebook:FJ6k2Jpq9BhOgHLv@inotebook.qtesnqy.mongodb.net/?retryWrites=true&w=majority"; 

const connectToMongo = () => {
        mongoose.connect(mongoURI);
}

module.exports = connectToMongo;