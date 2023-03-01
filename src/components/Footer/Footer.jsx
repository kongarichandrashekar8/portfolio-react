import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <h4>
          Excited to be part  of building innovative and great user experience software projects.
          </h4>
          <span className="primaryText">
            <a href="mailto:kongarichandrashekar8@gmail.com">Contact me</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Mail Id : </span>
            <p>kongarichandrashekar8@gmail.com</p>
          </div>
        
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
