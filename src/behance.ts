import Axios, { AxiosInstance, AxiosResponse } from 'axios';

interface IBehanceConfig {
  clientId: string;
  timeout: number;
}

/**
 * Handles request orchestration to the Behance API.
 */
export class Behance {
  private readonly clientId: string;
  private readonly api: AxiosInstance;

  /**
   * @param clientId the client id to access the Behance API.
   * @param timeout the time in ms to wait before aborting a request. Default is 1000ms.
   */
  public constructor(config: IBehanceConfig) {
    this.clientId = config.clientId;
    this.api = Axios.create({
      baseURL: 'https://api.behance.net/v2',
      timeout: config.timeout
    });
  }

  public async getFields() : Promise<AxiosResponse> {
    return this.api.get('/fields', { params: { clientId: this.clientId } });
  }
}
