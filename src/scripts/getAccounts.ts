export async function getAccounts() {
  try {
    return await (window as any).ethereum.request({ method: "eth_requestAccounts" });
  } catch (error) {}
}