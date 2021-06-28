/** object deepClone */
const obDeepClone = <T = Object>(ob: T): T => JSON.parse(JSON.stringify(ob));

/** object to (keyof object)[] */
const obMapToKeys = <T = Object>(ob: T): (keyof T)[] => {
    const result: (keyof T)[] = [];
    for (const key in ob) result.push(key);
    return result;
};

/** object remove undefined fields */
const obRemoveUndefinedFields = <T = Object>(ob: T): T => {
    const result: T = obDeepClone(ob);
    for (const key in ob)
        if (result[key] === undefined)
            delete result[key];
    return result
};

export {
    obDeepClone,
    obMapToKeys,
    obRemoveUndefinedFields,
};
