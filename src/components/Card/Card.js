import { MOVIE_POSTER_URL } from "./../../services/constants";

import {
  CardWrapper,
  ImageWrapper,
  Image,
  Description,
  Title,
  Text,
} from "./Card.styles";

const Card = ({ imageURL, title, overview, id }) => {
  return (
    <CardWrapper data-testid={`card-wrapper-${id}`}>
      <ImageWrapper data-testid={`card-image-wrapper-${id}`}>
        <Image
          aria-label="Movie poster"
          src={`${MOVIE_POSTER_URL}/${imageURL}`}
          role="img"
        />
      </ImageWrapper>
      <Description data-testid={`card-description-${id}`}>
        <Title data-testid={`card-title-${id}`}>{title.toUpperCase()}</Title>
        <Text data-testid={`card-overview-${id}`}>{overview}</Text>
      </Description>
    </CardWrapper>
  );
};

export default Card;
