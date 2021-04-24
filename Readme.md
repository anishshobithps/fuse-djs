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
const { FuzzySearch } require('fuse-djs');

const search = new FuzzySearch(collection, keys, options);

const data = search.run('query to search');
```

### Parameters

```ts
collection: Collection<K, V>
keys: string[] // These keys are keys which are supposed to be searched.
options?: Fuse.IFuseOptions<V>
```
### Examples 

Finding the closest displayName.
```ts
import { FuzzySearch } from 'fuse-djs';
//....
const { members } = message.guild; // Collection<string, GuildMember>;
// Some args 
const query = args[0];
// Invoke the constructor and pass in parameters
const search = new FuzzySearch(members.cache, ['displayName']); // Searchs through displayName property
// Call the run function and pass the query to find;
const data = search.run(query); // Data, Handle this data somehow 
```


## Packages used:
 - Fuse.js
 - @discordjs/collection

> Maintained by [Anish Shobith P S](https://github.com/Anish-Shobith)
