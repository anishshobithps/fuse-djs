import Fuse from 'fuse.js';
export declare class FuzzySearch<K extends string, V> {
    private readonly collectionArray;
    private readonly fuseOptions?;
    constructor(collection: Iterable<V>, keys: string[], options?: Fuse.IFuseOptions<V>);
    run(query: string): Fuse.FuseResult<V>[];
}
