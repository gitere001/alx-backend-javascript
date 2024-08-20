process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
  process.exit(); // Ends the process after displaying the name
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
