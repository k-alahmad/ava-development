import React from "react";
import bg from "../../../assets/images/background.webp";
import tower from "../../../assets/images/tower.webp";
import { motion } from "framer-motion";
import AnimatedText from "../../../components/UI/AnimatedText";
const Header = () => {
  return (
    <div className="relative h-screen">
      <img src={bg} className="object-top object-fill w-full h-full" alt="" />

      <motion.img
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.7" }}
        src={tower}
        className="object-center object-contain absolute bottom-7 left-[9%] h-[95%]"
        alt=""
      />
      <div className="absolute top-[20%] right-[10%] w-[40%] uppercase text-white">
        <AnimatedText text={"AVA RESIDENTIAL 1"} className={"text-7xl"} />
        <AnimatedText
          text={
            "ava RESIDENTIAL 1 features spacious, elegantly designed apartments and top-notch amenities, including a fitness center, swimming pool, and more. it's a gated community for added security and peace of mind"
          }
          className={"text-3xl mt-5 p-4 bg-white/10 "}
          staggerDuration={"0.006"}
          hiddenLetterY={"200px"}
        />
      </div>
    </div>
  );
};

export default Header;
