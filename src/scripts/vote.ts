import Web3 from "web3";
import { getAccounts } from "./getAccounts";
import { AbiItem } from "web3-utils";

export const vote = async (votingAddress: string, votingAbi: any, answerAddress: string) => {
  let res;
  if ((window as any).ethereum) {
    var web3 = new Web3(Web3.givenProvider);
    var contract = await new web3.eth.Contract(votingAbi as AbiItem[], votingAddress);
    const fromAddress = (await getAccounts())[0];

    try {
      await contract.methods.vote(answerAddress).send({from: fromAddress})
      .then(function(result : any){
        res = result;
    });
    } catch (error) {
      res = error;
    }
  }
  return res;
};