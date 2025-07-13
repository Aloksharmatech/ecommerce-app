import express from "express";
import cors from "cors";
import { AppDataSource } from "./src/config/data-source";
import productRoutes from "./src/routes/product.routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/uploads", express.static("uploads")); // serve images
app.use("/api/products", productRoutes);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
