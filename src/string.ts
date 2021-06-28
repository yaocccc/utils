/** 驼峰转下划线  AaaBbbCcc -> aaa_bbb_ccc */
const humpToLine = (str: string): string => str.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "");

/** 下划线转大驼峰 aaa_bbb_ccc -> AaaBbbCcc */
const lineToHump = (str: string): string => {
    let result = '', pre = '';
    for (const c of str) {
        if (pre === '_' || pre === '') result += c.toUpperCase();
        else result += c !== '_' ? c : '';
        pre = c;
    }
    return result;
};

export {
    humpToLine,
    lineToHump,
};
