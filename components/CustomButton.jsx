import { ArrowUpRight } from "lucide-react";

export const CustomButton = ({ children }) => {
  return (
    <button
      className={`bg-primary text-white text-xs rounded-3xl w-40 h-10 ml-1 flex items-center justify-center`}
    >
      {children}
      <ArrowUpRight className="w-4" />
    </button>
  );
};
