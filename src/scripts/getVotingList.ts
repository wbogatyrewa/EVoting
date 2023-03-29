import { Voting } from "../components/Types";

// результат функции: список голосований
export const getVotingList: () => Promise<Voting[]> = async () => {
  let votingList: Voting[] = [];
  const url = "http://localhost:8000/get-voting-list";
  let response = await fetch(url);
  if (response.ok) {
    votingList = await response.json();
  }
  return votingList;
}