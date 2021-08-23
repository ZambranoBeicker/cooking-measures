import { useState } from "react";

interface RecipeNameSectionProps {
  setUnmount: (updater: (index: number) => number) => void;
  styles: {
    Title: (props: { children: string }) => JSX.Element;
    Wrapper: (props: {
      children: JSX.Element[];
      unmount: boolean;
      onAnimationEnd: () => false | void;
    }) => JSX.Element;
    Input: (props: {
      placeholder: string;
      onKeyPress: (event: React.KeyboardEvent) => void;
    }) => JSX.Element;
  };
}

export default function RecipeNameSection({
  setUnmount,
  styles,
}: RecipeNameSectionProps): JSX.Element {
  const [unmountAnimation, setUnmountAnimation] = useState(false);

  const { Title, Wrapper, Input: TextField } = styles;
  return (
    <Wrapper
      unmount={unmountAnimation}
      onAnimationEnd={() =>
        unmountAnimation && setUnmount((state) => state + 1)
      }
    >
      <Title>What’s your today’s recipe?</Title>
      <TextField
        placeholder="Type here your recipe name"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            setUnmountAnimation(true);
          }
        }}
      />
    </Wrapper>
  );
}
