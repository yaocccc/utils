/** sleep(ms: number) */
const sleep = (ms: number): Promise<any> => new Promise(resolve => setTimeout(resolve, ms));

export {
    sleep
};
