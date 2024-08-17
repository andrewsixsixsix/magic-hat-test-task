import { create } from "zustand";
import { GuessResult, ICharacter, TCharacterHouse } from "@/types";

// default character to avoid null checks
const HARRY_POTTER: ICharacter = {
  id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
  name: "Harry Potter",
  house: "Gryffindor",
  dateOfBirth: "31-07-1980",
  patronus: "stag",
  actor: "Daniel Radcliffe",
  image: "https://ik.imagekit.io/hpapi/harry.jpg",
  attempts: 0,
  isGuessed: false,
};

interface ICharacterStore {
  activeCharacter: ICharacter;
  guessedCharacters: ICharacter[];
  actions: {
    guessCharacterHouse: (house: TCharacterHouse) => GuessResult;
    resetGuessedCharacters: () => void;
    setActiveCharacter: (character: ICharacter) => void;
  };
}

const useCharacterStore = create<ICharacterStore>((set, get) => ({
  activeCharacter: { ...HARRY_POTTER },
  guessedCharacters: [],
  actions: {
    guessCharacterHouse: (house: TCharacterHouse) => {
      const activeCharacter = get().activeCharacter;
      const guessedCharacters = get().guessedCharacters;

      if (activeCharacter.isGuessed) {
        // TODO: set another active character
        return GuessResult.ALREADY_GUESSED;
      } else if (!activeCharacter.attempts) {
        activeCharacter.attempts = 1;
      } else {
        activeCharacter.attempts += 1;
      }

      const isGuessed = activeCharacter?.house === house;
      activeCharacter.isGuessed = isGuessed;

      const index = guessedCharacters.indexOf(activeCharacter);
      const updatedGuessedCharacters =
        index > -1
          ? guessedCharacters.toSpliced(index, 1, activeCharacter)
          : [...guessedCharacters, activeCharacter];

      // TODO: set another active character
      set({ guessedCharacters: updatedGuessedCharacters });

      return isGuessed ? GuessResult.SUCCESS : GuessResult.FAILED;
    },
    resetGuessedCharacters: () =>
      set({ activeCharacter: { ...HARRY_POTTER }, guessedCharacters: [] }),
    setActiveCharacter: (character: ICharacter) =>
      set({ activeCharacter: character }),
  },
}));

export const useActiveCharacter = () =>
  useCharacterStore((state) => state.activeCharacter);
export const useGuessedCharacters = () =>
  useCharacterStore((state) => state.guessedCharacters);
export const useCharacterActions = () =>
  useCharacterStore((state) => state.actions);
