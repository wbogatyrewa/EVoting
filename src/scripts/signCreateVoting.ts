import { Dayjs } from "dayjs";
import { getAccounts } from "./getAccounts";
import { Buffer } from "buffer";

export interface Props {
  name: string;
  startDateTime: Dayjs | null;
  endDateTime: Dayjs | null;
  voters: string[];
  proposalsNames: string[];
}

export const signCreateVoting = async ({ name, startDateTime, endDateTime, voters, proposalsNames }: Props) => {
  let result = false;
  const message = `Создание голосования с параметрами: \nНазвание: ${name} \nДата начала: ${startDateTime?.toString()} \nДата окончания: ${endDateTime?.toString()} \nУчастники: ${voters} \nВарианты ответов: ${proposalsNames}`;
  try {
    const from: any = await getAccounts();
    const msg = `0x${Buffer.from(message, 'utf8').toString('hex')}`;
    const sign = await (window as any).ethereum.request({
      method: 'personal_sign',
      params: [msg, from],
    }).then((res: any) => {
      if (res) result = true;
    });
  } catch (err) {
    console.error(err);
    result = false;
  }
  return result;
};