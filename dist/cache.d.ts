/** 获取缓存: key expireSeconds dataGetter */
declare const getCache: <T>(key: string, expireSeconds: number, getter: () => Promise<T>) => Promise<T>;
export { getCache };
