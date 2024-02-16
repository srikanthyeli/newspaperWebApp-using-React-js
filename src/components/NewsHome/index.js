import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NewsItem from "../NewsItem"; 
import { v4 as uuidv4 } from "uuid";
import { header } from "../../config/config";
import { endpointPath } from "../../config/api";
import { Container, Header, SpinnerContainer, LoadingCircle,CardContainer,AppContainer} from "./styledComponent";

const  NewsHome=(props)=>{
  const { newscategory, country } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const category = newscategory;
  const title = capitaLize(category);
  document.title = `${capitaLize(title)} - News`;

  const updatenews = async () => {
    try {
      const response = await axios.get(endpointPath(country, category));
      setLoading(true);
      const parsedData = response.data;
    
      setArticles(parsedData.articles);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updatenews();
     // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
         <SpinnerContainer>
         <LoadingCircle />
       </SpinnerContainer>
      ) : (
        <>
        <AppContainer>
        <Header>{header(capitaLize(category))}</Header>

<Container>
  {articles.map((element)=>{
    return (
      <CardContainer>
        <NewsItem
            title={element.title}
            description={element.description}
            published={element.publishedAt}
            channel={element.source.name}
            alt="News image"
            publishedAt={element.publishedAt}
            imageUrl={
              element.image === null ? "https://images.seattletimes.com/wp-content/uploads/2024/02/tzr-bezos-021424.jpg?d=1200x630" : element.image
            }
            urlNews={element.url}
            key={uuidv4()}
          />
      </CardContainer>
    )
  })}

</Container>


        </AppContainer>
          
        </>
      )}
    </>
  );
}

NewsHome.defaultProps = {
  country: "us",
  newscategory: "general",
};

NewsHome.propTypes = {
  country: PropTypes.string,
  newscategory: PropTypes.string,
};

export default NewsHome;
