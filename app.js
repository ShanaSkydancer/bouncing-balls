const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const PORT = 8000;

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/src'));

app.use('/', router);
app.listen(process.env.port || PORT);

console.log(`Server running at http://${PORT}`);
