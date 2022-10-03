import { createSlice } from "@reduxjs/toolkit";

import ArticleData from "../data/article-316751.json";
import ArticleDataType from "../types/ArticleDataType";
import AuthorDataType from "../types/AuthorDataType";
import TopicsDataType from "../types/TopicsDataType";

const topicsData: TopicsDataType[] = ArticleData[0].topics.map((data) => ({
  name: data.name,
  link: data.link,
}));

const authorData: AuthorDataType = {
  title: ArticleData[0].byline_detail[0].title,
  url: ArticleData[0].byline_detail[0].url,
  thumbnail: ArticleData[0].byline_detail[0].hero_media.thumbnail,
};

const articleData: ArticleDataType = {
  title: ArticleData[0].title,
  publishedDate: ArticleData[0].publishdate,
  updatedDate: ArticleData[0].lastupdated,
  mediaImageData: {
    src: ArticleData[0].image.media_image,
    description: ArticleData[0].image.description,
    byline: ArticleData[0].image.image_byline_and_source.byline[0],
  },
  articleContent: ArticleData[0].content[0].body,
  readAlsoData: ArticleData[0].components,
  topicsData: topicsData,
  authorData: authorData,
  category: {
    name: ArticleData[0].category[0].name,
    link: ArticleData[0].category[0].link
  },
  subscriptionBoxData: {
    body: ArticleData[0].content[1].body,
    placeholder: ArticleData[0].content[1].placeholder,
    sub_description: ArticleData[0].content[1].sub_description,
    title: ArticleData[0].content[1].title,
    label: ArticleData[0].content[1].label
  }
};

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    data: articleData,
  } as {
    data: ArticleDataType;
  },
  reducers: {},
});

export default articleSlice.reducer;
