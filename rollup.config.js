import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'umd/phonetic-alphabet-converter.js',
    format: 'umd',
    name: 'PhoneticAlphabetConverter'
  },
  plugins: [typescript({ module: 'es2015' })]
};
