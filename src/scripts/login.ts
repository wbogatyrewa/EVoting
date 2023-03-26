export const login = async () => {
  let account = "";
  if ((window as any).ethereum) {
    await (window as any).ethereum
    .request({method: 'eth_requestAccounts'})
    .then((res: string[]) => {
      account = res[0];
    });
  } else {
    alert("Please, install MetaMask");
  }
  return account;
}