import { CookieOptions } from '@Interfaces';
const env = process.env.REACT_APP_POSTGRES_HOST;
const REACT_APP_POSTGRES_HOST = (env) ? env : "localhost";
/**
 *
 * @param sessionId that is install the key 'sessionId'
 */
export function setSessionIdInCookie(sessionId: string): void {
  const cookieName = 'sessionId';
  const cookieValue = sessionId;
  const maxAge = 60 * 60 * 24; // Время жизни cookie в секундах (например, 1 день)

  let now = new Date();
  const options = {
    expires: String(maxAge - now.getTime()),
    path: '/',
    domain: REACT_APP_POSTGRES_HOST,
    secure: false,
    sameSite: 'Strict' as 'Strict'
  }
  setCookie(cookieName, cookieValue, options);

}


/**
 *
 * @param cookieName entrypoint received the a key-name from cookie and check his.
 * @returns trye/false;
 */
export function checkCookieExists(cookieName: string): boolean {
  // Получаем все cookies в виде строки
  const cookies = document.cookie;

  // Создаем регулярное выражение для поиска конкретного ключа
  const regex = new RegExp('(^|; )' + encodeURIComponent(cookieName) + '=([^;]*)');

  // Проверяем, есть ли совпадение
  return regex.test(cookies);
}

export function checkCookie() {
  /**
   * This function is an init checker. It check the status cookie - It work is or not.
   */
  document.cookie = "ex=1;";
  if (!document.cookie) {
    alert("Включите cookie для корректной работы!");
  }
}


/**
 * Если видим ключа 'sessionId' - cookie ,
 * Смотрим класс 'active'.
 * Если нету, добавляем.
 *
 * Если не видим ключа 'sessionId' - cookie ,
   Смотрим класс 'active' и удаляем его.
 * @returns
 */
export async function checkerCookieKey(name: string): Promise<boolean> {

  const trueFalse = checkCookieExists(name);
  const root = document.getElementById('root');
  if (root === null) {
    return false;
  }

  if (trueFalse) {
    // если видим ключ 'sessionId' - cookie ,
    // смотрим класс 'active'.
    // Если нету, добавляем.
    if (!(root.className).includes('active')) {
      if ((root.className).length === 0) {
        root.className = 'active';
      }
      root.className = `${root.className} active`;

    }
  } else {
    // если не видим ключа 'sessionId' - cookie ,
    // смотрим класс 'active' и удаляем его.
    if ((root.className).includes('active')) {
      root.className = root.className.replace('active', '');

    }
  }
  return true;
}

/**
   * Keep data to the cookie.
   * Exemple result:
   *  "sessionId=f835abe5-2cd4-4dd4-b797-b3da92ffd005; path=/; expires=1723938402215; domain=localhost; secure=false; sameSite=Strict"
   * @param name: string. This is a name of key for cookie.
   * @param value: string  This is a value for key from the cookie.
   * @param options: object of type 'CookieOptions'.
    ```ts
      interface CookieOptions {
        expires?: Date | string;
        path?: string;
        domain?: string;
        secure?: boolean;
        sameSite?: 'Strict' | 'Lax' | 'None';
      }
    ```
   */
export function setCookie(name: string, value: string, options: CookieOptions = {}): void {


  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  // Кодируем имя и значение cookie
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (const optionKey in options) {
    updatedCookie += "; " + optionKey;
    const optionValue = options[optionKey as keyof CookieOptions];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }


  document.cookie = updatedCookie;
}

/**
 * Searcher for cookie's key
 * @param name
 * @returns
 */
export function getCookie(name: string): string {


  // eslint-disable-next-line
  // let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  // let csrftoken = matches ? decodeURIComponent(matches[1]) : undefined;


  // return csrftoken
  // const value = `${document.cookie}`;
  // const parts = value.split(`${name}=`);

  // if (parts && parts.length === 2) {
  //   return ((parts as Array<string>).pop() as string).split(';').shift();
  // }
  let cookieValue = '';
  if ((document.cookie !== undefined) && (document.cookie !== '')) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;

}
export function getMetasCookie() {
  const csrfToken = document.querySelector('meta[name="csrf-token"]')
  if (!csrfToken) {
    return ""
  }
  return csrfToken.getAttribute('content');
}

export function deleteCookie(cookieName: string): void {
  document.cookie = `${cookieName}=; Max-Age=0; path=/;`;
}
