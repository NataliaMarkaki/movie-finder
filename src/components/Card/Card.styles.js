import styled from 'styled-components';

import { colours } from '../../constants.styles';

export const CardWrapper = styled.div`
  width: 40rem;
  height: 17rem;
  border-radius: 0.625rem;
  display: inline-flex;
  margin: 0.625rem;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  height: 17rem;
  overflow: hidden;
  background: ${colours.transparent};
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem 0 0 0.625rem;
  background: ${(({ src }) => `url("${src}") no-repeat center center`)};
  background-size: cover;
  overflow: hidden;
`;

export const Description = styled.div`
  width: 70%;
  height: 17rem;
  background: ${colours.gray};
  border-radius: 0 0.625rem 0.625rem 0;
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Title = styled.h1`
  color: ${colours.black};
  font-weight: 400;
  text-align: left;
  letter-spacing: 1px;
`;

export const Text = styled.p`
  color: ${colours.black};
  text-align: justify;
  font-weight: 400;
`;
