import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ArticleHeroImageComponent from "./ArticleHeroImageComponent";
import MediaImageType from "../../types/MediaImageType";
import FollowUsComponent from "./FollowUsComponent";
import SidebarProps from "../../types/SideBarPropsType";
import SidebarPopularComponent from "./SidebarPopularComponent";
import RelatedTopicsComponent from "./RelatedTopicsComponent";
import ArticleContentBodyComponent from "./ArticleContentBodyComponent";
import ReadAlsoProps from "../../types/ReadAlsoPropsType";
import AuthorDataType from "../../types/AuthorDataType";
import BylineComponent from "./BylineComponent";
import TopicsDataType from "../../types/TopicsDataType";
import ReadMoreComponent from "./ReadMoreComponent";
import SubscribeComponent from "./SubscribeComponent";

interface Props {
  title: string;
  publishedDate: string;
  updatedDate: string;
  authorData: AuthorDataType;
  mediaImageData: MediaImageType;
  articleContent: string | undefined;
  sidebarData: SidebarProps[];
  topicsData: TopicsDataType[];
  readAlsoData: ReadAlsoProps[];
}

const styles = {
  articleTitle: {
    color: "var(--c-heading-inverse)",
    fontSize: "var(--fs-h1-s)",
    fontWeight: 600,
    fontFamily: "var(--ff-h1-s)",
    lineHeight: "var(--lh-h1-s)",
  },
};

const ArticleContentComponent = (props: Props) => {
  const {
    title,
    publishedDate,
    updatedDate,
    authorData,
    mediaImageData,
    articleContent,
    sidebarData,
    topicsData,
    readAlsoData,
  } = props;

  return (
    <Container className="mt-2 mb-5">
      <Row>
        <Col lg={{ span: 12, order: 1 }}>
          <h1 style={styles.articleTitle}>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, order: 3 }}>
          <BylineComponent
            publishedDate={publishedDate}
            updatedDate={updatedDate}
            authorData={authorData}
          />
        </Col>
        <Col lg={{ span: 8, order: 2 }}>
          <ArticleHeroImageComponent mediaImageData={mediaImageData} />
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
            contentBodyData={articleContent}
            readAlsoData={readAlsoData}
          />
          <RelatedTopicsComponent topicsData={topicsData} />
          <ReadMoreComponent />
        </Col>
        <Col lg={{ span: 4 }}>
          <SidebarPopularComponent sidebarData={sidebarData} />
        </Col>
        <Col lg={{ span: 8 }}>
          <SubscribeComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleContentComponent;
