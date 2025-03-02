const fs = require('fs');

fs.mkdir('testDir', (err) => {
  if (err) {
    console.error('Error!:', err);
    return;
  }
  console.log('Directory created successfully.');

  fs.rmdir('testDir', (err) => {
    if (err) {
      console.error('Error!:', err);
      return;
    }
    console.log('Directory removed successfully.');
  });
});
