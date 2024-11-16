export async function handlerEventSubmit(e: MouseEvent): Promise<boolean> {
  /**
   * This is a event handler of button press of the type submit.
   * It is  event of sending sms-massege from form. 
   */
  if (!e.type || (e.type && !e.type.includes("mousedown")) || (
    !(e.target as HTMLButtonElement).type &&
    !(e.target as HTMLButtonElement).type.includes("submit")
  )) {
    return false;
  };
  e.preventDefault();
  const currentTarget = e.currentTarget;

  return true
}
