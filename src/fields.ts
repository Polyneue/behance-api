import { AxiosInstance, AxiosResponse } from 'axios';

/**
 * @description Field - The Creative Field as defined by Behance.
 */
type Field = {
    id: number;
    name: string;
    encoded_name: string;
};

/**
 * @description FieldResponseData - The /fields response from Behance.
 */
type FieldResponseData = {
    fields: Field[];
    popular: Field[];
    http_code: number;
};

/**
 * @description FieldsResponse - The response object defined by Behance.
 *              https://www.behance.net/dev/api/endpoints/11
 */
export type FieldsResponse = {
    data: FieldResponseData;
    response: AxiosResponse;
};

/**
 * @param api an Axios instance to make the request with.
 * @param clientId the clientId to make the request with.
 */
export async function fields(api: AxiosInstance) : Promise<FieldsResponse> {
    // tslint:disable-next-line: no-backbone-get-set-outside-model
    const response: AxiosResponse<FieldResponseData> = await api.get('/fields');

    return {
        data: response.data,
        response
    };
}
