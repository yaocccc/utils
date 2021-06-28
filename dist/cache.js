"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCache = void 0;
const cacheMap = new Map();
/** 获取缓存: key expireSeconds dataGetter */
const getCache = (key, expireSeconds, getter) => __awaiter(void 0, void 0, void 0, function* () {
    const cache = cacheMap.get(key);
    const now = Date.now();
    if (cache && now - cache.getAt < expireSeconds * 1000) {
        return cache.data;
    }
    else {
        const newCache = yield getter();
        cacheMap.set(key, { getAt: now, data: newCache, expireSeconds });
        return newCache;
    }
});
exports.getCache = getCache;
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
