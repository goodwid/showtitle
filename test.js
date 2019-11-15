const getTitle = require('./lib/extract-title');

test = 'http://dyn.flaim.net';

async function runner(string) {
  return await getTitle(string);
}

runner(test)
  .then(r => console.log('results: ', r))
  .catch(err => console.log('Woops!.  \n\n', err));
