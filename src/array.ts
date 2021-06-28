/** array unique
    unique([1, 2, 2, 3]) => [1, 2, 3]; */
const unique = <T>(arr: T[]): T[] => Array.from(new Set(arr));

/** array to Map<key, item>
    const items = [
        { id: 1, value: 100 },
        { id: 2, value: 200 }
    ];
    toMap(items, item => item.id) => Map(
        1 => { id: 1, value: 100 },
        2 => { id: 2, value: 200 }
    ); */
const toMap = <T, U>(arr: T[], keyGetter: (item: T) => U): Map<U, T> => new Map(arr.map(item => [keyGetter(item), item]));

/** array to Map<key, tranItem>
    const items = [
        { id: 1, value: 100 },
        { id: 2, value: 200 }
    ];
    toTransMap(items, item => item.id, item => 2 * item.value) => Map(
        1 => 200,
        2 => 400
    ); */
const toTransMap = <T, U, I>(arr: T[], keyGetter: (item: T) => U, valueGetter: (item: T) => I): Map<U, I> => new Map(arr.map(item => [keyGetter(item), valueGetter(item)]));

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
const toGroup = <T, U>(arr: T[], keyGetter: (item: T) => U): Map<U, T[]> => {
    const map = new Map(arr.map(item => [keyGetter(item), []]));
    arr.forEach(item => map.get(keyGetter(item)).push(item));
    return map;
};

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
const toTransGroup = <T, U, I>(arr: T[], keyGetter: (item: T) => U, valueGetter: (item: T) => I): Map<U, I[]> => {
    const map = new Map(arr.map(item => [keyGetter(item), []]));
    arr.forEach(item => map.get(keyGetter(item)).push(valueGetter(item)));
    return map;
};

export {
    unique,
    toMap,
    toGroup,
    toTransMap,
    toTransGroup
};
