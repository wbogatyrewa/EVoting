export const setAbiToFile = async (address: string, abi: string) => {
  let result = "";
  const url = "http://localhost:8000/set-abi-to-file";
  const body = {
    address: address,
    abi: abi
  }
  let response = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(body)});
  if (response.ok === true) {
    result = await response.json();
  }
  return result;
}