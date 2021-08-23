import styled, { keyframes } from "styled-components";

interface WrapperProps {
  unmount: boolean;
}

const WrapperFadeIn = keyframes`


  0%{
    opacity:0;
    transform: translateX(-30px);
  }
  100%{
    opacity:1;
    transform: translateX(0px);
  }
`;
const WrapperFadeOut = keyframes`

  0%{
    opacity:1;
    transform: translateX(0px);
  }
  100%{
    opacity:0;
    transform: translateX(-30px);
  }
`;

export const Title = styled.h1`
  font-size: 4.75rem;
  margin-bottom: 2.75rem;
  font-weight: normal;
`;

export const Wrapper = styled.div<WrapperProps>`
  text-align: center;
  margin-top: 5rem;
  animation: ${({ unmount }) => (unmount ? WrapperFadeOut : WrapperFadeIn)} 0.3s
    forwards;
`;

export const TextField = styled.input`
  border: 1px solid #000000;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  width: 75%;
  padding: 0.5rem 1rem;
`;
