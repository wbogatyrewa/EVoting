import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { EVotingManagerABI, EVotingManagerAddress } from '../contracts/EVotingManager/EVotingManagerABI';
import { getAccounts } from './getAccounts';

export const getVotingAddresses = async () => {
  let votingAddresses: string[] = [];

  if ((window as any).ethereum) {
    var web3 = new Web3(Web3.givenProvider);
    var contract = await new web3.eth.Contract(EVotingManagerABI as AbiItem[], EVotingManagerAddress);
    const fromAddress = (await getAccounts())[0];

    try {
      await contract.methods.getEVotings().call({from: fromAddress})
      .then(function(result : any){
        votingAddresses = result;
    });
    } catch (error) {}
  }
  return votingAddresses;
}