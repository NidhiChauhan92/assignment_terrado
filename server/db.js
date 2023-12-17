const mongoose = require("mongoose");

const MongoDbConnection = async () => {
  mongoose
    .connect(
      "mongodb+srv://ndhpanchal1034:ndhpanchal1034@cluster0.t0dlcbb.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((res) => {
      console.log("db connected successfully");
      const fetched_data = mongoose.connection.db.collection("sample");
      fetched_data.find({}).toArray(function(err,data){
        if(err) console.log(err);
        else console.log(data);
      })
    })
    .catch((err) => {
      console.log(err);
    });
};
MongoDbConnection();

module.exports = MongoDbConnection;