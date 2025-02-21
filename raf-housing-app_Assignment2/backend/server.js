const express = require("express")
const cors = require("cors")
const { MongoClient } = require("mongodb")
const mysql = require("mysql2/promise")

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const mongoUri = "mongodb+srv://admin:vfsvfsvfs@cluster0.gkyjn.mongodb.net/";
const mongoClient = new MongoClient(mongoUri);

const dbConfig = {
    host: "database-2.czeee2egge1d.ca-central-1.rds.amazonaws.com",
    user: "admin",
    password: "vfsvfsvfs",
    database: "leaderboard_db_Haneul"
}

async function startServer() {
    try {
        await mongoClient.connect();
        console.log("connected to mongoDB");

        const db = mongoClient.db("myFirstDatabase");
        const usersCollection = db.collection("users");

        app.post("/api/login", async (req, res) => {
            const { email } = req.body;

            try {
                const user = await usersCollection.findOne({ email })
                console.log(user);
                if (!user) {
                    return res.status(404).json({ error: "User not found" })
                }

                res.json({
                    _id: user._id,
                    username: user.username,
                    email: user.email
                })
            } catch (error) {
                console.error("Login error:", error);
                res.status(500).json({ error: "inital server error" });
            }
        });

        app.get("/api/leaderboard", async (req, res) => {
            const count = parseInt(req.query.count) || 10;
            let connection;

            try {
                connection = await mysql.createConnection(dbConfig);
                const [rows] = await connection.execute(
                    `SELECT name, score FROM players
                    ORDER BY score DESC
                    LIMIT ${count}`
                );
                res.json({ success: true, data: rows });
            } catch (error) {
                console.log("Error fetching Leaderboard", error);
                res.status(500).json({ error: "Interanal server error" });
            } finally {
                if (connection) {
                    await connection.end();
                }
            }
        });

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });

    } catch (error) {
        console.error("server start error:", error);
    }

}

startServer().catch(console.error);