import styled from "styled-components";

import { colours } from "./../constants.styles";

export const Header = styled.header`
  margin: 0 2rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const Text = styled.p`
  color: ${colours.black};
  text-align: justify;
  font-weight: 400;
`;
