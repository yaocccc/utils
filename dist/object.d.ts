/** object deepClone */
declare const obDeepClone: <T = Object>(ob: T) => T;
/** object to (keyof object)[] */
declare const obMapToKeys: <T = Object>(ob: T) => (keyof T)[];
/** object remove undefined fields */
declare const obRemoveUndefinedFields: <T = Object>(ob: T) => T;
export { obDeepClone, obMapToKeys, obRemoveUndefinedFields, };
