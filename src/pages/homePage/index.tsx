import { useCallback, useMemo, useState } from "react";
import { TbInbox } from "react-icons/tb";
import { useArticles } from "../../data/query/article";
import CardArticle from "../../components/card/CardArticle";
import SearchField from "../../components/input/SearchField";
import SkeletonCardArticle from "../../components/card/SkeletonCardArticle";
const HomePage = () => {
  const [query, setQuery] = useState("");
  const { data: listArticles, isLoading } = useArticles(query);

  const articles = useMemo(() => listArticles?.docs ?? [], [listArticles]);

  const renderArticleCard = useCallback(
    (article: (typeof articles)[number]) => (
      <CardArticle article={article} key={article._id || article.web_url} />
    ),
    []
  );
  return (
    <>
      <div className="w-sm m-4">
        <SearchField
          value={query}
          onChange={setQuery}
          placeholder="Search articles..."
          debounce={300}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 p-4">
        {isLoading ? (
          Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCardArticle key={i} />
          ))
        ) : articles.length > 0 ? (
          articles.map(renderArticleCard)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
            <TbInbox size={48} className="mb-4" />
            <p className="text-lg font-medium mb-2">No articles found</p>
            <p className="text-sm">Try a different search keyword.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
