import Axios, { AxiosInstance } from 'axios';
import { fields, FieldsResponse } from './fields';

interface IBehanceConfig {
  clientId: string;
  timeout: number;
}

/**
 * Handles request orchestration to the Behance API via a managed instance.
 */
class Behance {
  private readonly clientId: string;
  private readonly api: AxiosInstance;

  /**
   * @param config the configuration options for the Behance API instance.
   */
  public constructor(config: IBehanceConfig) {
    this.clientId = config.clientId;
    this.api = Axios.create({
      baseURL: 'https://api.behance.net/v2',
      timeout: config.timeout,
      params: {
        client_id: this.clientId
      }
    });
  }

  // public async query(resource: string) {
  //   if (resource === 'fields') {
  //     return fields(this.api, this.clientId);
  //   } else if (resource === '')
  //   throw Error('Test');
  // }

  public async fields() : Promise<FieldsResponse> {
    return fields(this.api);
  }
}

module.exports = Behance;
