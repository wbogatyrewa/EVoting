import Web3 from "web3";
import { getAccounts } from "./getAccounts";
import { AbiItem } from "web3-utils";
import { ABI } from "./ABI";

export const vote = async (votingAddress: string, answerAddress: string) => {
  let res;
  if ((window as any).ethereum) {
    var web3 = new Web3(Web3.givenProvider);
    var contract = await new web3.eth.Contract(ABI as AbiItem[], votingAddress);
    const fromAddress = (await getAccounts());

    try {
      await contract.methods.vote(answerAddress).send({from: fromAddress}, function(error : any, transactionHash : any) {
        if (error != null) {
          res = error;
        } else {
          res = `https://sepolia.etherscan.io/tx/${transactionHash}`;
        }
      });
    } catch (error) {
      res = error;
    }
  }
  return res;
};