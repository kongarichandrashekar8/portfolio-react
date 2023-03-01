import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="certificates"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Certifications : </span>
            {/* <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p> */}
          </div>
          {/* <span className="secondaryText">Explore More Works</span> */}
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./pythonM.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./Blockchain.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./DataScienceforEngineers.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .11, .6)} src="./reactjs-1.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .13, .6)} src="./neuralnetworks.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .13, .6)} src="./Social Networks.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .15, .6)} src="./Introduction to Research.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .17, .6)} src="./Machine Learning-1.png" alt="project" />

            {/* <motion.img variants={fadeIn("up", "tween", .18, .6)} src="./course3.png" alt="project" /> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
