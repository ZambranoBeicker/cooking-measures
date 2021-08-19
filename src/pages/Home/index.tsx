import { useState } from "react";
import { Container } from "../../global";
import RecipeNameSection from "./components/RecipeNameSection";

export default function Home(): JSX.Element {
  const [unmount, setUnmount] = useState(false);
  return (
    <>
      <Container>
        {!unmount && <RecipeNameSection setUnmount={setUnmount} />}
      </Container>
    </>
  );
}
