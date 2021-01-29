type PhoneticAlphabet = Record<string, string>;

export const NATO_PHONETIC_ALPHABET: PhoneticAlphabet = {
  a: 'alpha',
  b: 'bravo',
  c: 'charlie',
  d: 'delta',
  e: 'echo',
  f: 'foxtrot',
  g: 'golf',
  h: 'hotel',
  i: 'india',
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
  z: 'zulu',
};

/**
 * Converts a string to an array of (NATO) phonetic alphabet words.
 */
export default function converter(
  text: string,
  alphabet: PhoneticAlphabet = NATO_PHONETIC_ALPHABET
): string[] {
  if (typeof text !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!text) {
    return [];
  }

  const output = [];
  const letters = text.toLowerCase().split('');

  for (let index = 0, len = letters.length; index < len; index++) {
    const letter = letters[index];
    const word = alphabet[letter];

    if (word) {
      output.push(word);
    }
  }

  return output;
}
