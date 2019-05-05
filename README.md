# Experimental ESM Integration API for WASI

_Wraps https://npmjs.org/package/wasi, created by @devsnek, in an ESM integration API._

### Proposed Usage

> **Note: `--experimental-wasm-modules` has not yet landed in any Node.js release, so this API is not usable right now!**

main.js
```js
import * as M from './wasi-file.wasm';
import { run } from 'wasi_unstable';

run(M, { ...options... });
```

Executed with:

```
NODE_OPTIONS="--experimental-modules --experimental-wasm-modules" node main.js
```

The Node.js branch supporting `--experimental-wasm-modules` will be linked here soon.

### LICENSE

MIT