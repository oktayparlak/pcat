const mongoose = require('mongoose');

exports.connectDB = mongoose
  .connect(
    'mongodb+srv://oktay:hsoxpLiqm2tYNCkh@cluster0.kpfsd7k.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('DB CONNECTED!');
  })
  .catch((err) => {
    console.log(err);
  });
