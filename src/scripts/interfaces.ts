
export enum FetchMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export interface FetchParams {
  method: FetchMethod,
  body?: string,
  headers?: {

    'X-CSRFToken'?: string,
    'Content-Type': 'application/json'
  }
  'credentials'?: string,
  mode?: 'no-cors' | 'cors',
}

export interface CookieOptions {
  expires?: Date | string;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}
