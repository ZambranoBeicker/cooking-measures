import { useState } from "react";
import { Container } from "../../global";
import { Wrapper, Title, TextField } from "./styles";
import RecipeNameSection from "../../components/Home/RecipeNameSection";
import StepsListSection from "../../components/Home/StepsListSection";

export default function Home(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [sections, setSections] = useState([
    <RecipeNameSection
      styles={{ Title: Title, Wrapper: Wrapper, Input: TextField }}
      setUnmount={setIndex}
    />,
    <StepsListSection
      styles={{ Title: Title, Wrapper: Wrapper, Input: TextField }}
      setUnmount={setIndex}
    />,
  ]);
  return (
    <>
      <Container>{sections[index]}</Container>
    </>
  );
}
