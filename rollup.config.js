export default {
  input: 'src/range.js',
  output: [
    {
      file: 'dist/range.esm.js',
      sourcemap: true,
      format: 'esm'
    },
    {
      file: 'dist/range.js',
      sourcemap: true,
      exports: 'named',
      format: 'cjs'
    }
  ]
}
