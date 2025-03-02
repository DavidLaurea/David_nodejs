const fs = require('fs');

fs.writeFile('output.txt', 'Hei Maailma!', (err) => {
  if (err) {
    console.error('Error!:', err);
    return;
  }
  console.log('File written successfully.');
});

fs.appendFile('output.txt', '\nAppending new text!', (err) => {
    if (err) {
      console.error('Error!:', err);
      return;
    }
    console.log('File appended successfully.');
  });
  
