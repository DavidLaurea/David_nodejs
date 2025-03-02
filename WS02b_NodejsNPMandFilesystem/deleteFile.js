const fs = require('fs');

fs.unlink('temp.txt', (err) => {
  if (err) {
    console.error('Error!:', err);
    return;
  }
  console.log('File deleted successfully.');
});
