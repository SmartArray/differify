import Differify, { DIFF_MODES } from '../..';

const differify = new Differify({
  mode: {
    object: DIFF_MODES.DIFF,
    array: DIFF_MODES.DIFF,
  },
});

const A = { id: 1, name: 'Peter Parker' };
const B = { id: 1, name: 'Spiderman' }; 

const diff = differify.compare(A, B);

if (diff.status !== 'MODIFIED') {
  console.error('Invalid results');
  process.exit(1);
}

console.log('Import of typescript module successful');

// outputs:
/*
{
  _: {
    id: { original: 1, current: 1, status: 'EQUAL', changes: 0 },
    name: {
      original: 'Peter Parker',
      current: 'Spiderman',
      status: 'MODIFIED',
      changes: 1
    }
  },
  status: 'MODIFIED',
  changes: 1
}
*/
