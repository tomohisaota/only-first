# only-first

Only one promise will be executed when multiple promises are called in parallel. the others will be ignored.

# How to install

```shell
npm install only-first
```

# How to use
## without return value

```typescript
async function buttonClicked() {
  await onlyFirst("buttonIdentifier", async () => {
    // do something only once
  })
}
```

## with return value

```typescript
async function buttonClicked() {
  const r = await onlyFirst("buttonIdentifier", async () => {
    // do something only once
    return "I am first"
  })
  if (r === undefined) {
    // not the first call
    return
  }
  // do rest of work
}
```

# Version History

- 1.1.0
    - Support return value
- 1.0.0
    - Initial Release

# License

This project is under the MIT license.
Copyright (c) 2024 Tomohisa Ota