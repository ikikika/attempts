import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ArticleHeroImageComponent from "../components/article/ArticleHeroImageComponent";
import FollowUsComponent from "../components/article/FollowUsComponent";
import SidebarPopularComponent from "../components/article/SidebarPopularComponent";
import RelatedTopicsComponent from "../components/article/RelatedTopicsComponent";
import ArticleContentBodyComponent from "../components/article/ArticleContentBodyComponent";
import BylineComponent from "../components/article/BylineComponent";
import ReadMoreComponent from "../components/article/ReadMoreComponent";
import SubscribeComponent from "../components/article/SubscribeComponent";
import { useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../redux/store";

const styles = {
  articleTitle: {
    color: "var(--c-heading-inverse)",
    fontSize: "var(--fs-h1-s)",
    fontWeight: 600,
    fontFamily: "var(--ff-h1-s)",
    lineHeight: "var(--lh-h1-s)",
  },
};

const ArticlePage = () => {
  const article = useAppSelector((state: RootState) => state.article);

  useEffect(() => {
    document.title = article.data.title;
  });

  return (
    <Container className="mt-2 mb-5">
      <Row>
        <Col lg={{ span: 12, order: 1 }}>
          <h1 style={styles.articleTitle}>{article.data.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, order: 3 }}>
          <BylineComponent
            publishedDate={article.data.publishedDate}
            updatedDate={article.data.updatedDate}
            authorData={article.data.authorData}
          />
        </Col>
        <Col lg={{ span: 8, order: 2 }}>
          <ArticleHeroImageComponent
            mediaImageData={article.data.mediaImageData}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <FollowUsComponent />
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 8 }} className="article-content-body">
          <ArticleContentBodyComponent
            contentBodyData={article.data.articleContent}
            readAlsoData={article.data.readAlsoData}
          />
          <RelatedTopicsComponent topicsData={article.data.topicsData} />
          <ReadMoreComponent />
        </Col>
        <Col lg={{ span: 4 }}>
          <SidebarPopularComponent />
        </Col>
        <Col lg={{ span: 8 }}>
          <SubscribeComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlePage;
