import express from 'express';
import * as path from 'path';

let app = express();
let router = express.Router();
let PORT = 8000;
let __dirname = path.resolve();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/src'));

app.use('/', router);
app.listen(process.env.port || PORT);

console.log(`Server running at http://${PORT}`);
