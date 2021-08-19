import { useEffect, useState } from "react";
import { Wrapper, Title, TextField } from "./styles";

interface RecipeNameSectionProps {
  setUnmount: (state: boolean) => void;
}

export default function RecipeNameSection({
  setUnmount,
}: RecipeNameSectionProps): JSX.Element {
  const [unmountAnimation, setUnmountAnimation] = useState(false);

  return (
    <Wrapper
      unmount={unmountAnimation}
      onAnimationEnd={() => unmountAnimation && setUnmount(true)}
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
