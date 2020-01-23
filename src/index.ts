type PhoneticAlphabet = Record<string, string>;

const nato: PhoneticAlphabet = {
  a: 'alpha',
  b: 'bravo',
  c: 'charlie',
  d: 'delta',
  e: 'echo',
  f: 'foxtrot',
  g: 'golf',
  h: 'hotel',
  i: 'indiana',
  j: 'juliet',
  k: 'kilo',
  l: 'lima',
  m: 'mike',
  n: 'november',
  o: 'oscar',
  p: 'papa',
  q: 'quebec',
  r: 'romeo',
  s: 'sierra',
  t: 'tango',
  u: 'uniform',
  v: 'victor',
  w: 'whiskey',
  x: 'x-ray',
  y: 'yankee',
  z: 'zulu'
};

/**
 * Converts a string to an array of (NATO) phonetic alphabet words.
 */
function converter(text: string, alphabet: PhoneticAlphabet = nato): string[] {
  if (typeof text !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  return text
    .toLowerCase()
    .split('')
    .map(letter => alphabet[letter]);
}

export default converter;
