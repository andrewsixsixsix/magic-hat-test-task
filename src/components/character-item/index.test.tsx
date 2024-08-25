import { render, screen } from "@testing-library/react-native";

import { CharacterItem } from "@/components";
import { colors } from "@/styles";
import { ICharacter } from "@/types";

describe("CharacterItem", () => {
  let character: ICharacter;
  const onPress = jest.fn();
  const onReloadPress = jest.fn();

  beforeEach(() => {
    character = {
      id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
      name: "Harry Potter",
      house: "Gryffindor",
      dateOfBirth: "31-07-1980",
      patronus: "stag",
      actor: "Daniel Radcliffe",
      image: "",
      attempts: 1,
      isGuessed: false,
    };
  });

  it("renders guessed character", () => {
    character.isGuessed = true;

    render(
      <CharacterItem
        character={character}
        colors={colors.dark}
        isActive={false}
        onCharacterPress={onPress}
        onReloadPress={onReloadPress}
      />,
    );

    expect(screen.getByTestId("character-item").children.length).toEqual(2);
    expect(screen.getByText("Harry Potter")).toBeOnTheScreen();
    expect(screen.getByText("Attempts: 1")).toBeOnTheScreen();
    expect(screen.queryByRole("imagebutton")).not.toBeOnTheScreen();
  });

  it("renders not guessed character", () => {
    render(
      <CharacterItem
        character={character}
        colors={colors.dark}
        isActive={false}
        onCharacterPress={onPress}
        onReloadPress={onReloadPress}
      />,
    );

    expect(screen.getByTestId("character-item").children.length).toEqual(2);
    expect(screen.getByText("Harry Potter")).toBeOnTheScreen();
    expect(screen.getByText("Attempts: 1")).toBeOnTheScreen();
    expect(screen.getByRole("imagebutton")).toBeOnTheScreen();
  });

  it("renders reload button if character is not guessed and inactive", () => {
    render(
      <CharacterItem
        character={character}
        colors={colors.dark}
        isActive={false}
        onCharacterPress={onPress}
        onReloadPress={onReloadPress}
      />,
    );

    expect(screen.queryByRole("imagebutton")).toBeOnTheScreen();
  });

  it("doesn't render reload button if character is not guessed and active", () => {
    render(
      <CharacterItem
        character={character}
        colors={colors.dark}
        isActive={true}
        onCharacterPress={onPress}
        onReloadPress={onReloadPress}
      />,
    );

    expect(screen.queryByRole("imagebutton")).not.toBeOnTheScreen();
  });
});
