<h1 align="center">Urlcutjs</h1>
<h3 align="center">This is the official Urlcut NPM package.</h3>

### Install

```sh
npm install urlcutjs
```

### Usage

```js
const UrlcutClient = require("urlcutjs");
const Client = new UrlcutClient("API-Key");
```

```ts
// TypeScript/ES Module support
import UrlcutClient from "urlcutjs";
const Client = new UrlcutClient("API-Key");
```

### How to shortend a link

```js
Client.Create("https://www.example.com")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

> Output

```json
{
  "success": true,
  "shortened": "CxTYCb",
  "domain": "example.com",
  "credits": 0.4
}
```

### How to delete an existing short link

```js
Client.Delete("Example-Short")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

> Output

```json
{
  "success": true
}
```

### How to get the analytics of a short link

```js
Client.Analytics("Example-Short")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

> Output

```json
{
  "success": true,
  "countriesOfTheUsers": [ { "DE": 1 } ],
  "usersDeviceType": { "PC": 1, "PHONE": 0 }
}
```

## **Contributors**

[![Contributors](https://stg.contrib.rocks/image?repo=UrlcutAccount/Urlcutjs)](https://github.com/UrlcutAccount/Urlcutjs/graphs/contributors)
