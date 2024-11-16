/***
 * There is a listener of download a page
 */


document.removeEventListener("DOMContentLoaded", handlerMain);
document.addEventListener("DOMContentLoaded", handlerMain);

function handlerMain(): boolean {
  /***
   * This is a function that is the main handler for all handlers. 
   */
  return true
}
