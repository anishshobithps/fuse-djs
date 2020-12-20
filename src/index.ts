import Fuse from 'fuse.js';
export class FuzzySearch<K extends string, V> {
  private readonly collectionArray: ReadonlyArray<V>;
  private readonly fuseOptions?: Fuse.IFuseOptions<V>;
  public constructor(
    collection: Iterable<V>,
    keys: string[],
    options?: Fuse.IFuseOptions<V>
  ) {
    this.collectionArray = [...collection];
    this.fuseOptions = {
      ...options,
      keys,
    };
  }

  public run(query: string) {
    const locquery = query.toLowerCase();
    const fuzzyFuse = new Fuse(this.collectionArray, this.fuseOptions);
    return fuzzyFuse.search(locquery);
  }
}
