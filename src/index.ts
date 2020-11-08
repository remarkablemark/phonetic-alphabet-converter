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

  const letters = text.toLowerCase().split('');
  return letters.map((letter) => alphabet[letter]);
}
