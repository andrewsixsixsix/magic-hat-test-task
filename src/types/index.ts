export type TCharacterHouse =
  | "Gryffindor"
  | "Hufflepuff"
  | "Ravenclaw"
  | "Slytherin"
  | "";

export interface ICharacter {
  id: string;
  name: string;
  house: TCharacterHouse;
  dateOfBirth: string | null;
  patronus: string;
  actor: string;
  image: string;
  attempts?: number;
  isGuessed?: boolean;
}

export enum GuessResult {
  ALREADY_GUESSED,
  SUCCESS,
  FAILED,
}
