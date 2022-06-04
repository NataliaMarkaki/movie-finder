import { MOVIE_POSTER_URL } from './../../services/constants';

import { CardWrapper, ImageWrapper, Image, Description, Title, Text } from './Card.styles';

const Card = ({ imageURL, title, overview }) => {
  return <CardWrapper>
    <ImageWrapper>
      <Image aria-label="Movie poster" src={`${MOVIE_POSTER_URL}/${imageURL}`} role="img" />
    </ImageWrapper>
    <Description>
      <Title>{title.toUpperCase()}</Title>
      <Text>{overview}</Text>
    </Description>
  </CardWrapper>
};

export default Card;