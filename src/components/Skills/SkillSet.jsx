import React from "react";
import { motion } from "framer-motion";
import css from "./SkillSet.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import Progress from "./Progress"

const SkillSet = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="skills"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Skills : </span>
            {/* <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p> */}
          </div>
          {/* <span className="secondaryText">Explore More Works</span> */}
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            {/* <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./pythonM.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./Blockchain.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./DataScienceforEngineers.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .11, .6)} src="./reactjs-1.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .13, .6)} src="./neuralnetworks.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .13, .6)} src="./Social Networks.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .15, .6)} src="./Introduction to Research.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .17, .6)} src="./Machine Learning-1.png" alt="project" /> */}
            <h4>Programming Languages : </h4>
                <Progress done="90" skill="Java" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,237,39,1) 63%)"/>
                <Progress done="75" skill="Python" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,155,237,1) 63%)"/>
                <Progress done="65" skill="Javascript and C++" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(237,181,36,1) 63%)"/>
                
                <h4>Backend Development : </h4>
                <Progress done="85" skill="Springboot, Spring MVC & REST" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,237,39,1) 63%)"/>
                <Progress done="75" skill="Hibernate" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,155,237,1) 63%)"/>
                <Progress done="60" skill="Node Js, Express Js and Flask" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(237,181,36,1) 63%)"/>
                
                <h4>Frontend Develpment : </h4>
                
                <Progress done="85" skill="HTML, CSS" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,237,39,1) 63%)"/>
                <Progress done="75" skill="React Js" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,155,237,1) 63%)"/>
                <Progress done="75" skill="Bootstrap" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,155,237,1) 63%)"/>
               
             
                <h4>Technologies : </h4>
               
                <Progress done="85" skill="SQL/MongoDB" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,237,39,1) 63%)"/>
                <Progress done="75" skill="JUnit, Mockito" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,155,237,1) 63%)"/>
                <Progress done="75" skill="Jenkins, Agile, JIRA, Confluence & Git" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,155,237,1) 63%)"/>

                <Progress done="65" skill="Linux & Windows" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(237,181,36,1) 63%)"/>
                <Progress done="60" skill="AWS" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(237,181,36,1) 63%)"/>
                <Progress done="75" skill="Numpy, Pandas" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(36,155,237,1) 63%)"/>

                <Progress done="60" skill="Scikit-Learn, Keras" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(237,181,36,1) 63%)"/>
                <Progress done="60" skill="React Native" back="linear-gradient(90deg, rgba(35,232,203,1) 0%, rgba(0,212,255,1) 0%, rgba(200,230,231,1) 0%, rgba(237,181,36,1) 63%)"/>


            {/* <motion.img variants={fadeIn("up", "tween", .18, .6)} src="./course3.png" alt="project" /> */}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillSet;
