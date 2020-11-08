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
  it.each([
    ['mark', ['mike', 'alpha', 'romeo', 'kilo']],
    ['abc', ['alpha', 'bravo', 'charlie']],
  ])('converts "%s" correctly', (text, expected) => {
    expect(converter(text)).toEqual(expected);
  });

  it('uses alphabet provided in 2nd argument', () => {
    const alphabet = {
      a: 'alfa',
    };
    const letter = 'a';
    expect(converter(letter, alphabet)).toEqual([alphabet[letter]]);
  });
});

describe('NATO_PHONETIC_ALPHABET', () => {
  it('matches snapshot', () => {
    expect(NATO_PHONETIC_ALPHABET).toMatchSnapshot();
  });
});
