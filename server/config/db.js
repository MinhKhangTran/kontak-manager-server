import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`Mit DB ${conn.connection.host} verbunden :D`.blue.underline);
  } catch (error) {
    console.error(`ERROR: ${error.message}`.red.underline);
    procces.exit(1);
  }
};
export default connectDB;
