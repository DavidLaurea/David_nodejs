const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const users = [
      { name: 'Altti', age: 25 },
      { name: 'Marko', age: 30 },
      { name: 'Matti', age: 18 }
    ];
    res.render('index', { message: 'Käyttäjä Lista', items: [], isLoggedIn: false, users });
  });
  
  
  
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
