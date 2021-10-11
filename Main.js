fs = require('fs');

const isValidCLI = (cli) => {
  if (cli.length < 5) {
    console.error('Invalid CLI');
    console.error('Please Make Sure to Run the Program with the CLI format: $node Main.ts <path_to_cookies_log> -d <date>');
    return false;
  }

  return true;
}

const Main = () => {
  const cli = process.argv;
  if (!isValidCLI(cli)) return;

  fs.readFile(cli[2], 'utf8', (err, data) => {
    if (err) return console.log(err);

    console.log(data);
  })
  
};

Main();