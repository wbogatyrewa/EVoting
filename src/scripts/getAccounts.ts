export const getAccounts = async () => {
  let account = "";
  try {
    await (window as any).ethereum.request({ method: "eth_requestAccounts" })
    .then((res: string[]) => {
      account = res[0];
    });
  } catch (error) {
    account = `${error}`;
  }
  return account;
}