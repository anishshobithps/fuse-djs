import Fuse from 'fuse.js';
import type FuseOptions from 'fuse.js';
import type Collection from '@discordjs/collection';
export declare class FuzzySearch<K extends string, V> {
    private readonly collectionArray;
    constructor(collection: Collection<K, V>);
    run(query: string, options: FuseOptions<V>): Fuse.FuseResult<V>[];
}
