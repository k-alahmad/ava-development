import React from "react";
import bg from "../../../assets/images/background.webp";
import tower from "../../../assets/images/tower.webp";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="relative">
      <img src={bg} className="object-center object-contain" alt="" />

      <motion.img
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.5" }}
        src={tower}
        className="object-center object-contain absolute bottom-7 left-[9%] h-[95%]"
        alt=""
      />
      <div className="absolute right-[20%] top-[20%] text-white ">
        <p className="text-5xl">Some Text</p>
        <p className="text-2xl mt-5 bg-white/30">Description</p>
      </div>
    </div>
  );
};

export default Header;
