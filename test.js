import * as M from './cowsay.wasm';
import { run } from 'wasi_unstable';

run(M, {
  args: ['/path/to/process.js', 'HELLO', 'WASI!']
});
