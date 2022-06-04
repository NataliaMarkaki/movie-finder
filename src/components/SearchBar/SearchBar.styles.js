import styled from 'styled-components';

import { colours, media } from '../../constants.styles';

export const Form = styled.form`
  width: 100%;
  display: flex;
  font-size: 1.8rem;
  font-family: 'Lato', sans-serif;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${media.medium}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Label = styled.label`
  position: absolute;
  padding: 0;
  border: 0;
  height: 0;
  width: 0;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 1rem 0.75rem;
  border-radius: 0.2rem;
  border: 0;
  background-color: ${colours.gray} ;
`;

export const Button = styled.button`
  border-radius: 0 0.2rem 0.2rem 0;
  border: 1px solid ${colours.transparent};
  background-color: ${colours.green};
  height: 3rem;
  width: 100%;
  margin-top: 0.7rem;
  font-weight: bold;

  @media screen and (min-width: ${media.medium}) {
    width: auto;
    margin: 0;
  }
`;
