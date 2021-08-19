import { useEffect, useState } from "react";
import { Wrapper, Title, TextField } from "./styles";

interface RecipeNameSectionProps {
  setUnmount: (updater: (index: number) => number) => void;
}

export default function RecipeNameSection({
  setUnmount,
}: RecipeNameSectionProps): JSX.Element {
  const [unmountAnimation, setUnmountAnimation] = useState(false);

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
