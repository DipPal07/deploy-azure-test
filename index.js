import dotenv from "dotenv";
import express from "express";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ message: "Hi this is me Dip, this is my first web deployment" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} and http://localhost:${PORT}`);
});

dotenv.config();
