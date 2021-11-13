require("dotenv").config();
const { connect } = require("mongoose");
const options = require("./config");

const connectDB = async () => {
  try {
    connect(process.env.DB_URL, options, (error) => {
      if (error) return console.error("Error from DB:", error);
      console.log(`Connected to ElectricsShop(mongoDB)...`);
    })
  } catch (error) {
    console.error("Error connect DB", error);
  }
}

module.exports = connectDB;
