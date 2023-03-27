export enum Status {
  Active = "Идет голосование",
  Before = "Скоро начнется",
  Finished = "Завершено"
}

export interface Answer {
  label: string;
  result?: number;
}

export interface Voting {
  name: string;
  startDateTime?: Date;
  endDateTime?: Date;
  address?: string;
  answers?: Answer[];
}