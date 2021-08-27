import { useState, Fragment } from "react";
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
      onKeyPress?: (event: React.KeyboardEvent) => void;
    }) => JSX.Element;
  };
}

interface IStepsState {
  name: string;
}

export default function SetpsListSection({
  setUnmount,
  recipeTitle,
  styles,
}: SetpsListSectionProps): JSX.Element {
  const [unmountAnimation, setUnmountAnimation] = useState(false);
  const [steps, setSteps] = useState<IStepsState[]>([]);
  const [value, setValue] = useState("");

  const { Wrapper, Title, Input: TextField } = styles;
  return (
    <Wrapper
      unmount={unmountAnimation}
      onAnimationEnd={() =>
        unmountAnimation && setUnmount((state) => state + 1)
      }
    >
      <Title>What are your steps?</Title>
      <TextField
        placeholder="Type here your next step"
        onChange={(event: React.KeyboardEvent) => {
          const value = (event.target as HTMLInputElement).value;
          setValue(value);
        }}
        onKeyPress={(event: React.KeyboardEvent) => {
          if (event.key === "Enter") {
            setSteps([...steps, { name: value }]);
            (event.target as HTMLInputElement).value = "";
          }
        }}
      />

      {/*TODO:Create the List component*/}
      <TodoWrapper>
        <TodoTitle>{recipeTitle}</TodoTitle>
        <TodoBody>
          {steps.length < 1 ? (
            <div>
              <h5>No hay items</h5>
            </div>
          ) : (
            steps.map((step, index) => (
              <Fragment key={`${index}`}>
                <TodoTaks>{step.name}</TodoTaks>
              </Fragment>
            ))
          )}
        </TodoBody>
      </TodoWrapper>
    </Wrapper>
  );
}
