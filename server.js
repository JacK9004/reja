const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://JacK:kL0BK5Thj7NCKDq4@cluster0.cbza8qa.mongodb.net/Reja"

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000
            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
}); 
        }
    }
)

