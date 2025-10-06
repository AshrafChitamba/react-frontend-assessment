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
      className="flex items-center justify-center bg-primary hover:bg-primary-hover h-9 px-3 bg-black/90 text-white capitalize cursor-pointer"
    >
      <ChevronLeft className="sm:mr-2" size={18} />
      <span>go back</span>
    </button>
  );
};
