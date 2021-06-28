/** 驼峰转下划线  AaaBbbCcc -> aaa_bbb_ccc */
declare const humpToLine: (str: string) => string;
/** 下划线转大驼峰 aaa_bbb_ccc -> AaaBbbCcc */
declare const lineToHump: (str: string) => string;
export { humpToLine, lineToHump, };
