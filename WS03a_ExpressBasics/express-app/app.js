const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.get('/services', (req, res) => {
  res.send('Services Page');
});

function checkCustomHeader(req, res, next) {
  if (!req.headers['x-custom-header']) {
    return res.status(400).send('X-Custom-Header is missing');
  }
  next();
}

app.get('/protected', checkCustomHeader, (req, res) => {
  res.send('You have accessed the protected route!');
});

app.post('/submit', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});

app.get('/list', (req, res) => {
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.send(data);
  });
});

app.get('/json', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, jsonData) => {
    if (err) {
      return res.status(500).send('Error reading JSON file');
    }
    let data = JSON.parse(jsonData);
    let table = `<table border="1"><tr><th>Name</th><th>Age</th></tr>`;
    data.forEach(item => {
      table += `<tr><td>${item.name}</td><td>${item.age}</td></tr>`;
    });
    table += `</table>`;
    res.send(table);
  });
});

app.post('/add', (req, res) => {
  const newUser = req.body; 
  fs.readFile('data.json', 'utf8', (err, jsonData) => {
    if (err) {
      return res.status(500).send('Error reading JSON file');
    }
    let data = JSON.parse(jsonData);
    data.push(newUser);
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        return res.status(500).send('Error writing to JSON file');
      }
      res.send('User added successfully');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
