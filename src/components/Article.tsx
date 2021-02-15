import React from "react";
import styled from "styled-components";

interface ArticleProps {
  className?: string;
  heading: string;
  subheading: string;
  text: string;
}

export const Article: React.FC<ArticleProps> = ({
  className,
  heading,
  subheading,
  text,
}) => {
  return (
    <StyledArticle className={className}>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <p>{text}</p>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  h1,
  h2 {
    margin-bottom: 12px;
  }
`;
export default Article;
