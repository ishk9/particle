import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { generateId } from './utils/generateId.js';


const PORT = 8000;
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post('/deploy', async (req, res) => {
  try{
    const data = req.body;
    console.log(data.url);
    var userId = generateId();
    console.log(userId);
    res.json({ success: true, userId: userId});
  }
  catch(err) {
    console.log(err);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});