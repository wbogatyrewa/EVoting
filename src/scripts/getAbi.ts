export const getAbi = async (address: string) => {
  let abi;
  const url = "http://localhost:8000/get-abi";
  const body = {
    address: address,
  }
  let response = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(body)});
  if (response.ok === true) {
    abi = await response.json();
  }
  return JSON.parse(abi);
}