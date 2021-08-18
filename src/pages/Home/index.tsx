import { Wrapper, Title, TextField } from "./styles";
import { Container } from "../../global";

export default function Home(): JSX.Element {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>What’s your today’s recipe?</Title>
          <TextField placeholder="Type here your recipe name" />
        </Wrapper>
      </Container>
    </>
  );
}
