# Experimental ESM Integration API for WASI

_Wraps https://npmjs.org/package/wasi, created by @devsnek, in an ESM integration API._

### Proposed ES Module Integration Usage

**Note: `--experimental-wasm-modules` has not yet landed in any Node.js release, so this example only works against the PR at https://github.com/nodejs/ecmascript-modules/pull/46**

```
npm install wasi_unstable
```

main.js
```js
import * as M from './wasi-file.wasm';
import { run } from 'wasi_unstable';

run(M, { ...options... });
```

Executed with:

```
node --experimental-modules --experimental-wasm-modules main.js
```
