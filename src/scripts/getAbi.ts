export const getAbi = async () => {
  let abi;
  const url = "http://localhost:8000/get-abi";
  let response = await fetch(url, {
    method: "GET", 
    headers: { "Accept": "application/json" }
  });
  if (response.ok === true) {
    abi = await response.json();
  }
  return JSON.parse(abi);
}