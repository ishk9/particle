import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = 8000;
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post('/deploy', async (req, res) => {
  try{
    const data = req.body;
    console.log(data.url);
    res.json({ success: true, message: 'Hello from the backend!'});
  }
  catch(err) {
    console.log(err);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});