# To reproduce a bug building an Inertia + Svelte app using vite

```
git clone https://github.com/niczero/vite-plugin-svelte-bug.git
cd vite-plugin-svelte-bug
pnpm install
pnpm run build
```

Results in the error
```
2022-06-03T07:28:49.338Z vite:vite-plugin-svelte error trying to resolve
__vite-browser-external from __vite-browser-external?commonjs-proxy via
package.json svelte field  TypeError [ERR_INVALID_ARG_VALUE]: The argument
'filename' must be a file URL object, file URL string, or absolute path string.
Received '\x00__vite-browser-external?commonjs-proxy'
    at new NodeError (node:internal/errors:372:5)
    at createRequire (node:internal/modules/cjs/loader:1220:13)
    at resolveViaPackageJsonSvelte
($DIR/vite-plugin-svelte-bug/node_modules/@sveltejs/vite-plugin-svelte/dist/index.cjs:1476:59)
    at Object.resolveId
($DIR/vite-plugin-svelte-bug/node_modules/@sveltejs/vite-plugin-svelte/dist/index.cjs:1728:28)
    at
$DIR/vite-plugin-svelte-bug/node_modules/rollup/dist/shared/rollup.js:22974:37
{
  code: 'ERR_INVALID_ARG_VALUE'
}
```
