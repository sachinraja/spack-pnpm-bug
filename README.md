# spack-pnpm-bug

```
node:internal/process/promises:246
triggerUncaughtException(err, true /_ fromPromise _/);
^

[Error: load_transformed failed

Caused by:
0: failed to analyze module
1: failed to resolve is-odd from /home/sachinraja/test/spack-pnpm-bug/node_modules/is-even/index.js
2: index not found] {
code: 'GenericFailure'
}
```

To run:

```
pnpm install
```

```
pnpm spack
```
