import { useState } from "react";
import { Container } from "../../global";
import RecipeNameSection from "../../components/Home/RecipeNameSection";
import StepsListSection from "../../components/Home/StepsListSection";

export default function Home(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [sections, setSections] = useState([
    <RecipeNameSection setUnmount={setIndex} />,
    <StepsListSection setUnmount={setIndex} />,
  ]);
  return (
    <>
      <Container>{sections[index]}</Container>
    </>
  );
}
