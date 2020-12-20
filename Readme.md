# <center> Fuze-Djs </center>

## Installation
<br>

### Npm:
```bash
npm install Anish-Shobith/fuse-djs#build
```
### Yarn:
```bash
yarn add Anish-Shobith/fuse-djs#build
```

> Note: This is will install from github, you will require git to be installed on your system.

## Usage
<br>

### Typescript:
```ts
import { FuzzySearch } from 'fuse-djs';

const search = new FuzzySearch(collection, keys, options);

const data = search.run('query to search');
```

### JavaScript:

```js
const { FuzzySearch } from 'fuse-djs';

const search = new FuzzySearch(collection, keys, options);

const data = search.run('query to search');
```

### Parameters

```ts
collection: Collection<K, V>
keys: string[]
options?: Fuse.IFuseOptions<V>
```

## Packages used:
 - Fuse.js
 - @discordjs/collection

> Maintained by [Anish Shobith P S](https://github.com/Anish-Shobith)