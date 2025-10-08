export const EntriesSkeleton = () => {
  return (
    <section className="container mx-auto px-4 py-4 animate-pulse">
      <div className="flex justify-end items-center gap-2 mt-3 mb-5">
        <div className="bg-gray-300 w-60 h-9 rounded-md"></div>
        <div className="bg-gray-300 w-24 h-9 rounded-md"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded-md border">
            <div className="bg-gray-300 w-full h-[11.25rem] rounded-t-md"></div>
            <div className="p-4 space-y-3">
              <div className="bg-gray-300 h-3 w-[98%] rounded-md"></div>
              <div className="bg-gray-300 h-2 w-[92%] rounded-md"></div>
              <div className="bg-gray-300 h-2 w-[86%] rounded-md"></div>
              <div className="bg-gray-300 h-2 w-[80%] rounded-md"></div>
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-gray-300 h-8 rounded-md"></div>
                <div className="bg-gray-300 h-8 rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
