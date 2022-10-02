import React from "react";
import ArticleContentComponent from "../components/article/ArticleContentComponent";

import ArticleData from "../data/article-316751.json";
import SidebarPopularData from "../data/sideBar_popular.json";
import AuthorDataType from "../types/AuthorDataType";
import SidebarProps from "../types/SideBarProps";

const ArticlePage = () => {
  let sidebarData: SidebarProps[] = SidebarPopularData.items.map((data) => {
    return {
      title: data.title,
      thumbnail: data.thumbnail,
    };
  });

  let topicsData: string[] = ArticleData[0].topics.map((data) => {
    return data.name;
  });

  let authorData: AuthorDataType = {
    title: ArticleData[0].byline_detail[0].title,
    url: ArticleData[0].byline_detail[0].url,
    thumbnail:
      "https://onecms-res.cloudinary.com/image/upload/s--3_InCk2H--/c_fill%2Cg_auto%2Ch_220%2Cw_220/f_auto%2Cq_auto/v1/tdy-migration/illustrated_byline_peitingnew.jpg?itok=k0KIW9FU",
  };

  return (
    <ArticleContentComponent
      title={ArticleData[0].title}
      publishedDate={ArticleData[0].publishdate}
      updatedDate={ArticleData[0].lastupdated}
      authorData={authorData}
      mediaImageData={{
        src: ArticleData[0].image.media_image,
        description: ArticleData[0].image.description,
        byline: ArticleData[0].image.image_byline_and_source.byline[0],
      }}
      articleContent={ArticleData[0].content[0].body}
      sidebarData={sidebarData}
      topicsData={topicsData}
      readAlsoData={ArticleData[0].components}
    />
  );
};

export default ArticlePage;
