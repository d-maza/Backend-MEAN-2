const mongoose = require('mongoose');

const options = {

  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.set('strictQuery', false);

// LocalHost Connection = process.env.MONGODB_LOCAL
mongoose.connect(process.env.MONGODB_LOCAL, options)
  .then(db => console.log("🟢 La conexión MongoDB tuvo éxito."))
  .catch(err => console.log("🔴 Error en la conexión DB: " + err));  

