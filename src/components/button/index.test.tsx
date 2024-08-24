import { Text } from "react-native";
import { fireEvent, render, screen } from "@testing-library/react-native";

import { Button } from "./index";

jest.useFakeTimers();

describe("Button", () => {
  it("renders correctly", () => {
    render(
      <Button>
        <Text>Hello</Text>
      </Button>,
    );

    expect(screen.getByText("Hello")).toBeOnTheScreen();
  });

  it("handles press", () => {
    const onPress = jest.fn();

    render(
      <Button onPress={onPress}>
        <Text>Hello</Text>
      </Button>,
    );

    fireEvent.press(screen.getByRole("button", { name: "Hello" }));

    expect(onPress).toHaveBeenCalled();
  });

  it("enabled", () => {
    const disabled = false;
    const onPress = jest.fn();

    render(
      <Button disabled={disabled} onPress={onPress}>
        <Text>Enabled</Text>
      </Button>,
    );

    fireEvent.press(screen.getByRole("button", { name: "Enabled" }));

    expect(onPress).toHaveBeenCalled();
  });

  it("disabled", () => {
    const disabled = true;
    const onPress = jest.fn();

    render(
      <Button disabled={disabled} onPress={onPress}>
        <Text>Disabled</Text>
      </Button>,
    );

    fireEvent.press(screen.getByRole("button", { name: "Disabled" }));

    expect(onPress).not.toHaveBeenCalled();
  });
});
