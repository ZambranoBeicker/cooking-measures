import { useState } from "react";
import { TodoWrapper, TodoTaks, TodoTitle, TodoBody } from "./styles";

interface SetpsListSectionProps {
  setUnmount: (updater: (index: number) => number) => void;
  recipeTitle: string;
  styles: {
    Title: (props: { children: string }) => JSX.Element;
    Wrapper: (props: {
      children: JSX.Element[];
      unmount: boolean;
      onAnimationEnd: () => false | void;
    }) => JSX.Element;
    Input: (props: {
      placeholder: string;
      onChange?: (event: React.KeyboardEvent) => void;
    }) => JSX.Element;
  };
}

export default function SetpsListSection({
  setUnmount,
  recipeTitle,
  styles,
}: SetpsListSectionProps): JSX.Element {
  const [unmountAnimation, setUnmountAnimation] = useState(false);

  const { Wrapper, Title, Input: TextField } = styles;
  return (
    <Wrapper
      unmount={unmountAnimation}
      onAnimationEnd={() =>
        unmountAnimation && setUnmount((state) => state + 1)
      }
    >
      <Title>What are your steps?</Title>
      <TextField placeholder="Type here your next step" />

      {/*TODO:Create the List component*/}
      <TodoWrapper>
        <TodoTitle>{recipeTitle}</TodoTitle>
        <TodoBody>
          <TodoTaks>sefnvsjf</TodoTaks>
          <TodoTaks>sefnvsjf</TodoTaks>
          <TodoTaks>sefnvsjf</TodoTaks>
        </TodoBody>
      </TodoWrapper>
    </Wrapper>
  );
}
