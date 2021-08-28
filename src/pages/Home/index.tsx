import { useState } from "react";
import { Container } from "../../global";
import { Wrapper, Title, TextField } from "./styles";
import RecipeNameSection from "./components/RecipeNameSection";
import StepsListSection from "./components/StepsListSection";
import Buttons from "./components/Buttons";

export default function Home(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [recipeTitle, setRecipeTitle] = useState("");

  return (
    <>
      <Container>
        {index === 0 ? (
          <RecipeNameSection
            styles={{ Title: Title, Wrapper: Wrapper, Input: TextField }}
            setTitle={(title) => setRecipeTitle(title)}
            setUnmount={setIndex}
          />
        ) : (
          <StepsListSection
            styles={{ Title: Title, Wrapper: Wrapper, Input: TextField }}
            recipeTitle={recipeTitle}
            setUnmount={setIndex}
          />
        )}
        <Buttons setIndex={(newIndex: number) => {
          if (newIndex + index < 0) return
          if (newIndex + index > 1) return
          setIndex(index + newIndex)
        }} />
      </Container>
    </>
  );
}
