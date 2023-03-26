export const checkAccount = async () => {
  let account = "";

  if ((window as any).ethereum) {
    await (window as any).ethereum
    .request({method: 'eth_accounts'})
    .then((res: string[]) => {
      if ((res.length !== 0) && ((window as any).ethereum.networkVersion == 1)) {
        account = res[0];
      }
    });
  }
  return account;
}