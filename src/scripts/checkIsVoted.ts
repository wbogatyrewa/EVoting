import Web3 from "web3";
import { getAccounts } from "./getAccounts";
import { AbiItem } from "web3-utils";
import { ABI } from "./ABI";

export const checkIsVoted = async (votingAddress: string, voter: string) => {
  let isVoted = false;
  if ((window as any).ethereum) {
    var web3 = new Web3(Web3.givenProvider);
    var contract = await new web3.eth.Contract(ABI as AbiItem[], votingAddress);
    const fromAddress = (await getAccounts());

    try {
      await contract.methods.isVoted(voter).call({from: fromAddress}, function(error: any, result: any){
        isVoted = result;
      })
    } catch (error) {
      isVoted = false;
    }
  }
  return isVoted;
};