import mongoose from "mongoose";

async function connectNaDataBase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    
    return mongoose.connection;
}
export default connectNaDataBase;
