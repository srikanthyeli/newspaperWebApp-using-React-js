import React from "react";
import PropTypes from "prop-types";

import Details from "./Details";
import {Image,Button,CardContainer,BodyContainer,Heading,Description} from "./styledComponets";


const NewsItem=(props)=> {
  const { imageUrl, alt, description, title, channel, published, urlNews } = props;

  return (
    <>
      <CardContainer>
        <Image variant="top" src={imageUrl} alt={alt} />
        <BodyContainer>
          <Heading>{title}</Heading>
          <Description>{description}</Description>
          <Details channel={channel} published={published} />
          <Button href={urlNews} target="_blank" >
            Read more →
          </Button>
        </BodyContainer>
      </CardContainer>
    </>
  );
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  published: PropTypes.string,
  urlNews: PropTypes.string,
};

export default NewsItem;
