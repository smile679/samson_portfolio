// components/Loader.jsx
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <AiOutlineLoading3Quarters
        size={40}
        className="animate-spin text-emerald-500"
      />
    </div>
  );
}

export default Loader;