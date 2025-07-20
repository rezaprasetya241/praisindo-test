import { useCallback } from "react";
import Card from "./Card";
import type { Article } from "../../helper/types/article";
import Badge from "../Badge";

interface Props {
  article: Article;
}
const CardArticle = ({ article }: Props) => {
  const goDetailsArticle = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);
  return (
    <Card handleClick={() => goDetailsArticle(article.web_url)}>
      <div className="max-w-sm p-4 cursor-pointer flex flex-col h-full gap-y-3 hover:bg-gray-50">
        <div className="w-full h-50">
          <img
            src={article.multimedia.default.url}
            className="w-full rounded-md h-full object-cover"
          />
        </div>
        <p className="font-medium line-clamp-2 ">{article.headline.main}</p>

        <div className="flex flex-col gap-y-1 justify-start text-xs">
          <p>{article.byline.original}</p>
          <p>{article.pub_date}</p>
        </div>
        <p className="line-clamp-2 text-sm">{article.abstract}</p>
        <Badge label={article.document_type} />
      </div>
    </Card>
  );
};

export default CardArticle;
