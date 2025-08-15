import { useParams } from "react-router";
import fetchSingleArticle from "../api/fetch-single-article";
import Comments from "../components/article-page/Comments";
import Votes from "../components/article-page/Votes";
import Tags from "../components/article-page/Tags";
import Text from "../components/article-page/Text";
import ErrorPage from "../pages/ErrorPage";
import "../components/article-page/article.css";
import useApiRequest from "../useApiRequest";

function Article() {
  const { article_id } = useParams();
  const {
    isLoading,
    error,
    data: { article = [] },
  } = useApiRequest(fetchSingleArticle, article_id);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <main className="article-container">
      <img className="article-image" src={article.article_img_url} alt="" />
      <Tags author={article.author} created_at={article.created_at} />
      <Text topic={article.topic} title={article.title} body={article.body} />
      <Votes votes={article.votes} article_id={article_id} />
      <Comments article_id={article_id} comment_count={article.comment_count} />
    </main>
  );
}

export default Article;
