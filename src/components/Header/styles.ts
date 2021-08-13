import styled from "styled-components";

export const Wrapper = styled.header`
  font-size: 1.125rem;
  box-shadow: 0px 4px 15px -5px rgba(0, 0, 0, 0.4);
`;

export const Logo = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: inherit;
`;

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  font-size: inherit;
  & > li {
    margin: 0 0.425rem;
  }
`;
