import { Wrapper, Logo, LinkList } from "./styles";
import { Container } from "../../global";

export default function Header() {
  return (
    <Wrapper>
      <Container display="flex">
        <Logo>
          <h3>Logo</h3>
        </Logo>
        <LinkList>
          <li>Github</li>
          <li>About</li>
        </LinkList>
      </Container>
    </Wrapper>
  );
}
