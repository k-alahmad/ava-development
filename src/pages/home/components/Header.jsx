import React from "react";
import bg from "../../../assets/images/background.webp";
import tower from "../../../assets/images/tower.webp";
import { motion } from "framer-motion";
import AnimatedText from "../../../components/UI/AnimatedText";
const Header = () => {
	return (
		<div className='relative h-screen'>
			<img
				src={bg}
				className='object-cover object-left w-full h-full'
				alt='background Header'
			/>

			<motion.img
				initial={{ opacity: 0, y: "100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: "0.7" }}
				src={tower}
				className='object-center object-contain absolute bottom-0 max-md:left-[20%] md:left-[7%] h-[95%]'
				alt=''
			/>
			<div className='absolute top-[20%] md:top-[30%] md:right-[10%] w-full md:w-[50%] uppercase text-white max-md:text-center max-md:px-[5%]'>
				<AnimatedText
					text={"AVA RESIDENTIAL 1"}
					className={
						"text-4xl lg:text-7xl p-4 max-md:bg-secondary/30 backdrop-blur-sm md:bg-secondary/10"
					}
				/>
				<AnimatedText
					text={
						"ava RESIDENTIAL 1 features spacious, elegantly designed apartments and top-notch amenities, including a fitness center, swimming pool, and more. it's a gated community for added security and peace of mind"
					}
					className={
						"text-xl md:text-3xl mt-5 p-4 max-md:bg-secondary/30 backdrop-blur-md md:bg-secondary/10"
					}
					staggerDuration={"0.006"}
					hiddenLetterY={"200px"}
				/>
			</div>
		</div>
	);
};

export default Header;
