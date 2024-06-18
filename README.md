# only-you
Only one promise will be executed when multiple promises are called in parallel. the others will be ignored.

I love only you. I won't date with anyone else while I'm seeing you:-)

# How to install

```shell
npm install only-you
```

# How to use

```typescript
async function buttonClicked(){
  await onlyYou("buttonIdentifier", async () => {
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