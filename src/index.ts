import Collection from '@discordjs/collection';
import Fuse from 'fuse.js';
// eslint-disable-next-line no-duplicate-imports
import FuseOptions from 'fuse.js';

export default class FuzzySearch<K extends string, V> {
  private readonly collectionArray: ReadonlyArray<V>;
  public constructor(collection: Collection<K, V>) {
    this.collectionArray = [...collection.values()];
  }

  public run(query: string, options: FuseOptions<V>) {
    const locquery = query.toLowerCase();
    const fuzzyFuse = new Fuse(this.collectionArray, {
      ...options,
    });
    return fuzzyFuse.search(locquery);
  }
}
