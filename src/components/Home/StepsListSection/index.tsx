import { useState } from "react";
import { Wrapper, Title, TextField } from "./styles";

interface SetpsListSectionProps {
  setUnmount: (updater: (index: number) => number) => void;
}

export default function SetpsListSection({
  setUnmount,
}: SetpsListSectionProps): JSX.Element {
  const [unmountAnimation, setUnmountAnimation] = useState(false);

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
    </Wrapper>
  );
}
