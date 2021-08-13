import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
	body{
		font-family: Helvetica;
		margin: 0;
		padding: 0;
	}

	p{
		margin: 0;
	}

	h1,h2,h3,h4,h5,h6{
		margin: 0;
		padding: 0;
	}
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
`;
