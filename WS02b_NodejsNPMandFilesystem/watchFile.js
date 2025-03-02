const fs = require('fs');

fs.watch('watch.txt', (eventType, filename) => {
  console.log(`File ${filename} has been modified. Event type: ${eventType}`);
});
