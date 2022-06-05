import styled from "styled-components";

import { colours, media } from "../../constants.styles";

export const CardWrapper = styled.div`
  border-radius: 0.625rem;
  display: inline-flex;
  margin: 0.625rem;
  width: 100%;

  @media screen and (min-width: ${media.medium}) {
    width: 40rem;
    height: 17rem;
    overflow: scroll;
  }
`;

export const ImageWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${media.medium}) {
    display: block;
    width: 30%;
    height: 17rem;
    height: 17rem;
    overflow: hidden;
    background: ${colours.transparent};
  }
`;

export const Image = styled.div`
  display: none;

  @media screen and (min-width: ${media.medium}) {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0.625rem 0 0 0.625rem;
    background: ${({ src }) => `url("${src}") no-repeat center center`};
    background-size: cover;
    overflow: hidden;
  }
`;

export const Description = styled.div`
  background: ${colours.gray};
  border-radius: 0.625rem;
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${media.medium}) {
    width: 70%;
    height: 17rem;
    border-radius: 0 0.625rem 0.625rem 0;
    overflow: scroll;
  }
`;

export const Title = styled.h1`
  color: ${colours.black};
  font-weight: 400;
  text-align: center;
  letter-spacing: 1px;

  @media screen and (min-width: ${media.medium}) {
    text-align: left;
  }
`;

export const Text = styled.p`
  color: ${colours.black};
  text-align: justify;
  font-weight: 400;
`;
