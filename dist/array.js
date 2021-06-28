"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTransGroup = exports.toTransMap = exports.toGroup = exports.toMap = exports.unique = void 0;
/** array unique
    unique([1, 2, 2, 3]) => [1, 2, 3]; */
const unique = (arr) => Array.from(new Set(arr));
exports.unique = unique;
/** array to Map<key, item>
    const items = [
        { id: 1, value: 100 },
        { id: 2, value: 200 }
    ];
    toMap(items, item => item.id) => Map(
        1 => { id: 1, value: 100 },
        2 => { id: 2, value: 200 }
    ); */
const toMap = (arr, keyGetter) => new Map(arr.map(item => [keyGetter(item), item]));
exports.toMap = toMap;
/** array to Map<key, tranItem>
    const items = [
        { id: 1, value: 100 },
        { id: 2, value: 200 }
    ];
    toTransMap(items, item => item.id, item => 2 * item.value) => Map(
        1 => 200,
        2 => 400
    ); */
const toTransMap = (arr, keyGetter, valueGetter) => new Map(arr.map(item => [keyGetter(item), valueGetter(item)]));
exports.toTransMap = toTransMap;
/** array to Map<key, item[]>
    const items = [
        { pid: 1, value: 100 },
        { pid: 1, value: 200 }
        { pid: 2, value: 300 }
    ];
    toGroup(items, item => item.pid) => Map(
        1 => [{ pid: 1, value: 100 }, { pid: 1, value: 200 }],
        2 => [{ pid: 2, value: 300 }]
    ); */
const toGroup = (arr, keyGetter) => {
    const map = new Map(arr.map(item => [keyGetter(item), []]));
    arr.forEach(item => map.get(keyGetter(item)).push(item));
    return map;
};
exports.toGroup = toGroup;
/**
    array to Map<key, tranItem[]>
    const items = [
        { pid: 1, value: 100 },
        { pid: 1, value: 200 }
        { pid: 2, value: 300 }
    ];
    toTransGroup(items, item => item.pid, item => 2 * item.value) => Map(
        1 => [200, 400],
        2 => [600]
    ); */
const toTransGroup = (arr, keyGetter, valueGetter) => {
    const map = new Map(arr.map(item => [keyGetter(item), []]));
    arr.forEach(item => map.get(keyGetter(item)).push(valueGetter(item)));
    return map;
};
exports.toTransGroup = toTransGroup;
