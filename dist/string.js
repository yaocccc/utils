"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineToHump = exports.humpToLine = void 0;
/** 驼峰转下划线  AaaBbbCcc -> aaa_bbb_ccc */
const humpToLine = (str) => str.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "");
exports.humpToLine = humpToLine;
/** 下划线转大驼峰 aaa_bbb_ccc -> AaaBbbCcc */
const lineToHump = (str) => {
    let result = '', pre = '';
    for (const c of str) {
        if (pre === '_' || pre === '')
            result += c.toUpperCase();
        else
            result += c !== '_' ? c : '';
        pre = c;
    }
    return result;
};
exports.lineToHump = lineToHump;
