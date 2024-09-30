import express from "express";
import dotenv from "dotenv";
import { DBconnection } from "./utils/db.js";
import booksRoutes from "./routes/books.route.js"; // Import routes
import transactionRoutes from "./routes/transaction.router.js"
import userRoutes from "./routes/user.route.js"
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url';

dotenv.config();


const app = express();

// DB connection
DBconnection();

const corsOptions = {
    origin: '*',
    credentials: true
};

// cors 
app.use(cors(corsOptions))

// Middleware to parse incoming JSON requests
app.use(express.json());

// Books routes
app.use(booksRoutes);

// Transaction routes
app.use(transactionRoutes);

// User routes
app.use(userRoutes)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "..");



app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
})

app.get('/', (_, res) => {
    res.json({
        msg: "hello world"
    });
});

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err.message);
    console.log("Server is running...");
});
