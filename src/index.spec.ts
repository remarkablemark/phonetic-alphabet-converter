import converter, { NATO_PHONETIC_ALPHABET } from '.';

describe('error', () => {
  it.each([
    undefined,
    null,
    0,
    1,
    {},
    [],
    () => undefined,
    new Date(),
    Symbol(),
  ])('throws when first argument is %s', (value) => {
    expect(() => {
      converter(value as string);
    }).toThrowError('First argument must be a string');
  });
});

describe('converter', () => {
  it('returns empty array for blank string', () => {
    expect(converter('')).toEqual([]);
  });

  it.each([
    ['abc', ['alpha', 'bravo', 'charlie']],
    ['Mark', ['mike', 'alpha', 'romeo', 'kilo']],
    ['l33t h4x0rz', ['lima', 'tango', 'hotel', 'x-ray', 'romeo', 'zulu']],
    [
      'Hello, World!',
      [
        'hotel',
        'echo',
        'lima',
        'lima',
        'oscar',
        'whiskey',
        'oscar',
        'romeo',
        'lima',
        'delta',
      ],
    ],
  ])('converts "%s" correctly', (text, expected) => {
    expect(converter(text)).toEqual(expected);
  });

  it('uses alphabet when provided', () => {
    const letter = 'a';
    const alphabet = { [letter]: 'alfa' };
    expect(converter(`${letter}bc`, alphabet)).toEqual([alphabet[letter]]);
  });
});

describe('NATO_PHONETIC_ALPHABET', () => {
  it('matches snapshot', () => {
    expect(NATO_PHONETIC_ALPHABET).toMatchSnapshot();
  });
});
