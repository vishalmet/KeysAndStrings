import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ButtonTemp = ({ title, to }) => {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined") {
      if (to.startsWith("http") || to.startsWith("https")) {
        window.location.href = to;
      } else {
        router.push(to);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center pt-3 md:pt-6">
        <motion.button
          className="bg-yellow-600 hover:bg-custom-hover border-2 hover:shadow-xl font-medium text-white p-2 px-8"
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
        >
          {title}
        </motion.button>
      </div>
    </div>
  );
};

export default ButtonTemp;