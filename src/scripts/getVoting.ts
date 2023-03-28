import * as fs from 'fs';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Answer, Voting } from '../components/Types';
import { getAccounts } from './getAccounts';

// результат функции: список голосований
export const getVoting = () => {
  const votingsFolder = '../contracts/VotingContracts/';

  // в цикле по директории
  const votings =  fs.readdirSync(votingsFolder).map(async file => {
    console.log(file);
    // 1) file: abi контакта голосования
    // 2) достать abi и записать его в переменную
    let Address = file.slice(0, -5);
    let ABI = JSON.parse(fs.readFileSync(file, 'utf-8'));

    let name = "";
    let startDateTime = new Date();
    let endDateTime = new Date();
    let voters: string[] = [];
    let proposalsAddr: string[] = [];
    let proposalsNames: string[] = [];

    // 3) достать данные с помощью методов голосования
    if ((window as any).ethereum) {
      var web3 = new Web3(Web3.givenProvider);
      var contract = await new web3.eth.Contract(ABI as AbiItem[], Address);
      const fromAddress = (await getAccounts())[0];
  
      try {
        await contract.methods.getName().call({from: fromAddress})
        .then(function(result : any){
          name = result;
        });
        await contract.methods.getStartDate().call({from: fromAddress})
        .then(function(result : any){
          startDateTime = new Date(+result * 1000)
        });
        await contract.methods.getEndDate().call({from: fromAddress})
        .then(function(result : any){
          endDateTime = new Date(+result * 1000)
        });
        await contract.methods.getVoters().call({from: fromAddress})
        .then(function(result : any){
          voters = result;
        });
        await contract.methods.getProposalsAddress().call({from: fromAddress})
        .then(function(result : any){
          proposalsAddr = result;
        });
        await contract.methods.getProposalsNames().call({from: fromAddress})
        .then(function(result : any){
          proposalsNames = result;
        });
      } catch (error) {}
    }

    let answers: Answer[] = [];
      for (let i = 0; i < proposalsAddr.length; i++) {
        answers.push({
          label: proposalsNames[i],
          address: proposalsAddr[i],
        });
      }
      // вернуть Voting
      let voting: Voting = {
        name: name,
        startDateTime: startDateTime,
        endDateTime: endDateTime,
        address: Address,
        voters: voters,
        answers: answers,
      }
    return voting;
  });
  return votings;
}