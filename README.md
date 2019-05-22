# Experimental ESM Integration API for WASI

_Wraps https://npmjs.org/package/wasi, created by @devsnek, in an ESM integration API._

### Proposed ES Module Integration Usage

```
npm install wasi_unstable
```

main.js
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
node --experimental-modules --experimental-wasm-modules main.js
```
