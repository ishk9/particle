import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { generateId } from './utils/generateId.js';
import { simpleGit } from 'simple-git';

const PORT = 8000;
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post('/deploy', async (req, res) => {
  try{
    const url = req.body.url;

    var userId = generateId();
    console.log(userId);

    await simpleGit().clone(url, `models/${userId}`);

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