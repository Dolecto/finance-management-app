import "@fontsource/roboto/500.css";
import { FaPlusCircle } from "react-icons/fa";

export default function AddCard() {
  return (
    <div
      className={`h-full w-full flex flex-col bg-gray-400 p-3 shadow-[4px_4px_8px_#00000040] text-black font-['Roboto'] rounded-lg`}
    >
      <div className="h-full w-full flex rounded-lg justify-center items-center inset-shadow-sm bg-gray-300">
        <FaPlusCircle color="white" size={32} />
      </div>
    </div>
  );
}
