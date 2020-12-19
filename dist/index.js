"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuzzySearch = void 0;
const fuse_js_1 = __importDefault(require("fuse.js"));
class FuzzySearch {
    constructor(collection) {
        this.collectionArray = [...collection.values()];
    }
    run(query, options) {
        const locquery = query.toLowerCase();
        const fuzzyFuse = new fuse_js_1.default(this.collectionArray, {
            ...options,
        });
        return fuzzyFuse.search(locquery);
    }
}
exports.FuzzySearch = FuzzySearch;
