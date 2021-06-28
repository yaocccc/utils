"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obRemoveUndefinedFields = exports.obMapToKeys = exports.obDeepClone = void 0;
/** object deepClone */
const obDeepClone = (ob) => JSON.parse(JSON.stringify(ob));
exports.obDeepClone = obDeepClone;
/** object to (keyof object)[] */
const obMapToKeys = (ob) => {
    const result = [];
    for (const key in ob)
        result.push(key);
    return result;
};
exports.obMapToKeys = obMapToKeys;
/** object remove undefined fields */
const obRemoveUndefinedFields = (ob) => {
    const result = obDeepClone(ob);
    for (const key in ob)
        if (result[key] === undefined)
            delete result[key];
    return result;
};
exports.obRemoveUndefinedFields = obRemoveUndefinedFields;
