import { Button, Wrapper } from "./styles";

interface IButtons {
  setIndex: (index: number) => void;

}

export default function Buttons({ setIndex }: IButtons): JSX.Element {

  return (
    <Wrapper>
      <Button
        onClick={() => {
          setIndex(-1)
        }}>
        previous
      </Button>
      <Button
        onClick={() => {
          setIndex(1)
        }}
      >Continue</Button>
    </Wrapper>
  );
}
