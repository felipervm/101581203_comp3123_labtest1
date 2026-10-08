const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsDir)) {
  const files = fs.readdirSync(logsDir);

  files.forEach((fileName) => {
    console.log(`delete files...${fileName}`);
    fs.unlinkSync(path.join(logsDir, fileName));
  });

  fs.rmdirSync(logsDir);
} else {
  console.log('Logs directory does not exist.');
}
