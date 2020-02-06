import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.database.host, {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred on attempy to connect to the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;