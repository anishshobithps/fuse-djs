import Collection from '@discordjs/collection';
import Fuse from 'fuse.js';
import FuseOptions from 'fuse.js';
export default class FuzzySearch<K extends string, V> {
    private readonly collectionArray;
    constructor(collection: Collection<K, V>);
    run(query: string, options: FuseOptions<V>): Fuse.FuseResult<V>[];
}
