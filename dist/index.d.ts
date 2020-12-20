import Fuse from 'fuse.js';
import type { Collection } from '@discordjs/collection';
export declare class FuzzySearch<K extends string, V> {
    private readonly collectionArray;
    private readonly fuseOptions?;
    constructor(collection: Collection<K, V>, keys: string[], options?: Fuse.IFuseOptions<V>);
    run(query: string): Fuse.FuseResult<V>[];
}
