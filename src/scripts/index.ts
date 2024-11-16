/***
 * There is a listener of download a page
 */
import { handlerEventSubmit } from "./services/handler/handlerFormSubmit";

document.removeEventListener("DOMContentLoaded", handlerMain);
document.addEventListener("DOMContentLoaded", handlerMain);

function handlerMain(): boolean {
  /***
   * This is a function that is the main handler for all handlers. 
   */
  const formHtml = document.querySelector("smsForm");
  if (formHtml === null) {
    return false
  }

  (formHtml as HTMLFormElement).removeEventListener("mousedown", handlerEventSubmit);
  (formHtml as HTMLFormElement).addEventListener("mousedown", handlerEventSubmit)

  return true
}
