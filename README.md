# Experimental ESM Integration API for WASI

_Wraps https://npmjs.org/package/wasi, created by @devsnek, in an ESM integration API._

### Proposed ES Module Integration Usage

Note this API is only an experiment in integrating WASI with the ES Module system in Node.js and is not based on any existing proposal.

```
npm install wasi_unstable
```

main.mjs
```js
import * as M from './wasi-file.wasm';
import { run } from 'wasi_unstable';

run(M, {
  // defaults:
  env: process.env,
  args: process.argv.slice(1)
});
```

Executed with:

```
node --experimental-modules --experimental-wasm-modules main.mjs
```
