import AuthorDataType from "./AuthorDataType";
import CategoryDataType from "./CategoryDataType";
import MediaImageType from "./MediaImageType";
import ReadAlsoPropsType from "./ReadAlsoPropsType";
import SubscriptionBoxDataType from "./SubscriptionBoxDataType";
import TopicsDataType from "./TopicsDataType";

export default interface ArticleDataType {
  title: string;
  publishedDate: string;
  updatedDate: string;
  mediaImageData: MediaImageType;
  articleContent?: string;
  readAlsoData: ReadAlsoPropsType[];
  topicsData: TopicsDataType[];
  authorData: AuthorDataType;
  category: CategoryDataType;
  subscriptionBoxData: SubscriptionBoxDataType;
}
