import { FetchParams, FetchMethod } from "@Interfaces";
import { PROJECT_REFERRAL_HOST, PROJECT_REFERRAL_PORT, PROJECT_REFERRAL_PROTOCOL } from "src/dotenv_";


const params: FetchParams = {
  method: FetchMethod.POST,
}

/**
 *
  * @param pathnameStr: string, '/it/is/api/path/'
 * @returns JSON of boolean
 */
export async function add(body_: string,
  pathnameStr = '/api/v1/referral/add'
): Promise<object | boolean | string> {
  /*
   GET the csfr_token
    - send a request 'GET' to the server.  Response receiving - 'csfr_token'.
  */
  let response = await get(`/csrf_token`) as Record<"csrf_token", string>
  let csrf_token = ""
  if (response["csrf_token"]) {
    csrf_token += response["csrf_token"]
  }

  /*
  After, did request a 'POST' and received the 'user_token'.
 */
  params['headers'] = {
    'X-CSRFToken': csrf_token,
    'Content-Type': 'application/json',
  }
  params['body'] = body_;
  const paramsCopy = {}
  Object.assign(paramsCopy, params);
  const urlStr = `${PROJECT_REFERRAL_PROTOCOL}://${PROJECT_REFERRAL_HOST}:${PROJECT_REFERRAL_PORT}`;

  const url = urlStr + pathnameStr;
  const answer = await fetch(url, paramsCopy);
  if (answer.ok) {
    const response = await answer.json();

    return response
  }
  return false
}

export async function get(
  pathnameStr = '/api/v1/clients/add/'
): Promise<object | boolean | string> {

  const urlStr = `${PROJECT_REFERRAL_PROTOCOL}://${PROJECT_REFERRAL_HOST}:${PROJECT_REFERRAL_PORT}`;
  const url = urlStr + pathnameStr;
  const answer = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  if (answer.ok) {
    const dataJson = await answer.json();
    return dataJson
  }
  return false
}
