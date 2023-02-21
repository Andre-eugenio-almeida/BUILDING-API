const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://andre:${process.env.MONGODB_PASSWORD}@cluster0.n6jgvtq.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao ao se conectar com o banco de dados:",
          error
        );
      }

      return console.log("conexão ao banco de dados realizar com sucesso");
    }
  );
};

module.exports = connectToDatabase;
