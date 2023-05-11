import { Dayjs } from "dayjs";

export interface Props {
  name: string;
  startDateTime: Dayjs | null;
  endDateTime: Dayjs | null;
  voters: string[];
  proposalsNames: string[];
}

export const createVoting = async ({ name, startDateTime, endDateTime, voters, proposalsNames }: Props ) => {
  let address = "";
  const url = "http://5.188.50.113:8000/create-voting";
  
  const voting = {
    name: name,
    startDateTime: startDateTime?.unix(),
    endDateTime: endDateTime?.unix(),
    voters: voters,
    proposalsNames: proposalsNames
  };
  let response = await fetch(url, {
    method: "POST", 
    headers: { 
      "Accept": "application/json", 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(voting)
  });
  if (response.ok) {
    address = await response.json();
  }
  return address;
};