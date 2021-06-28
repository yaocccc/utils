/** 缓存 */
type Cache<T = any> = { getAt: number, data: T, expireSeconds: number};
const cacheMap = new Map<string, Cache>();

/** 获取缓存: key expireSeconds dataGetter */
const getCache = async <T>(key: string, expireSeconds: number, getter: () => Promise<T>): Promise<T> => {
    const cache = cacheMap.get(key);
    const now = Date.now();
    if (cache && now - cache.getAt < expireSeconds * 1000) {
        return cache.data;
    } else {
        const newCache = await getter();
        cacheMap.set(key, { getAt: now, data: newCache, expireSeconds });
        return newCache;
    }
};

/** 10分钟清一次过期缓存 */
const clearCache = () => {
    const now = Date.now();
    for (const entity of cacheMap.entries()) {
        const [key, cache] = entity;
        if (now - cache.getAt > cache.expireSeconds * 1000)
            cacheMap.delete(key);
    }

    setTimeout(clearCache, 600 * 1000);
};
clearCache();

export {
    getCache
};
