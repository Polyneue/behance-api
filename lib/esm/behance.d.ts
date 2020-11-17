import { AxiosResponse } from 'axios';
interface IBehanceConfig {
    clientId: string;
    timeout: number;
}
/**
 * Handles request orchestration to the Behance API.
 */
export declare class Behance {
    private readonly clientId;
    private readonly api;
    /**
     * @param clientId the client id to access the Behance API.
     * @param timeout the time in ms to wait before aborting a request. Default is 1000ms.
     */
    constructor(config: IBehanceConfig);
    getFields(): Promise<AxiosResponse>;
}
export {};
