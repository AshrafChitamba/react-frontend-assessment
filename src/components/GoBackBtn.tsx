import { useRouter } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const GoBackBtn = () => {
  const router = useRouter();

  const navigateBack = () => {
    return () => router.history.back();
  };

  return (
    <button
      onClick={navigateBack()}
      className="flex items-center justify-center h-11 px-3 bg-white hover:bg-gray-200 text-sm text-black/90 font-medium capitalize cursor-pointer transition-colors"
      data-testid="goback-btn"
    >
      <ChevronLeft className="sm:mr-2" size={18} />
      <span>go back</span>
    </button>
  );
};
