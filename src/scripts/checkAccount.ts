export const checkAccount = async () => {
  let account = "";

  if ((window as any).ethereum) {
    await (window as any).ethereum
    .request({method: 'eth_accounts'})
    .then((res: string[]) => {
      if (res.length !== 0) {
        account = res[0];
      }
    });
  }
  return account;
}