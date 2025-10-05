export const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#f9fafb] text-xl p-2.5 rounded-full font-medium">
            AC
          </span>
          <div className="flex flex-col items-start justify-center">
            <span className="font-medium">Ashraf Chitambaa</span>
            <span className="text-[#627084] text-sm">admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};
