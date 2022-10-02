import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ArticleHeroImageComponent from "./ArticleHeroImageComponent";
import MediaImageType from "../../types/MediaImageType";
import FollowUsComponent from "./FollowUsComponent";
import SidebarProps from "../../types/SideBarProps";
import SidebarPopularComponent from "./SidebarPopularComponent";
import RelatedTopicsComponent from "./RelatedTopicsComponent";
import ArticleContentBodyComponent from "./ArticleContentBodyComponent";
import ReadAlsoProps from "../../types/ReadAlsoProps";

interface Props {
  title: string;
  publishedDate: string;
  updatedDate: string;
  author: string;
  mediaImageData: MediaImageType;
  articleContent: string | undefined;
  sidebarData: SidebarProps[];
  topicsData: string[];
  readAlsoData: ReadAlsoProps[];
}

const ArticleContentComponent = (props: Props) => {
  const {
    title,
    publishedDate,
    updatedDate,
    author,
    mediaImageData,
    articleContent,
    sidebarData,
    topicsData,
    readAlsoData,
  } = props;

  return (
    <Container className="mt-2">
      <Row>
        <Col lg={{ span: 12, order: 1 }}>
          <h1 style={{ backgroundColor: "red" }}>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, order: 3 }}>
          <div style={{ backgroundColor: "green" }}>
            <div>{author}</div>
            <div>published {publishedDate}</div>
            <div>updated {updatedDate}</div>
          </div>
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
        <Col lg={{ span: 8 }}>
          <ArticleContentBodyComponent contentBodyData={articleContent} readAlsoData={readAlsoData}/>
          <RelatedTopicsComponent topicsData={topicsData} />
          <div style={{ width: "100%", backgroundColor: "orange" }}>
            read more
          </div>
        </Col>
        <Col lg={{ span: 4 }}>
          <SidebarPopularComponent sidebarData={sidebarData} />
        </Col>
        <Col lg={{ span: 8 }}>
          <div style={{ height: 100, width: "100%", backgroundColor: "pink" }}>
            subscribe
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleContentComponent;
