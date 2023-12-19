import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js"
import productRoutes from "./routes/productsRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

connectDb(); // Connect to MongoDb
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
