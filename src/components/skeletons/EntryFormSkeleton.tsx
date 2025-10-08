export const EntryFormSkeleton = () => {
  return (
    <div className="grid px-4 py-6 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 animate-pulse rounded-md">
      <div className="h-9 bg-gray-300 rounded w-full"></div>
      <div className="h-9 bg-gray-300 rounded w-full"></div>
      <div className="col-span-full border-2 border-dashed border-gray-300 p-3 sm:p-5 rounded-md flex flex-col items-center justify-center">
        <div className="w-full h-32 bg-gray-300 rounded"></div>
      </div>
      <div className="col-span-full flex items-center gap-2">
        <div className="h-9 w-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};
