const SkeletonCardArticle = () => {
  return (
    <div
      className="animate-pulse rounded-md bg-white border border-gray-100 p-4 max-w-sm flex flex-col gap-y-3"
      data-testid="skeleton-card"
    >
      <div className="w-full h-48 bg-gray-200 rounded-md" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="flex flex-col gap-y-1 text-xs">
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-6 w-20 bg-gray-200 rounded-full" />
    </div>
  );
};

export default SkeletonCardArticle;
