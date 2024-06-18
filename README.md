# only-first
Only one promise will be executed when multiple promises are called in parallel. the others will be ignored.

# How to install

```shell
npm install only-first
```

# How to use

```typescript
async function buttonClicked(){
  await onlyFirst("buttonIdentifier", async () => {
    // do something only once
  })   
}
```

# Version History

- 1.0.0
    - Initial Release

# License

This project is under the MIT license.
Copyright (c) 2024 Tomohisa Ota