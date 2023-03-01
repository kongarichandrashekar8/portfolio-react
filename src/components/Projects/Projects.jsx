import React from 'react'
import { projects, WhatDoIHelp } from '../../utils/data'
import css from './Project.module.scss'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'
const Projects = () => {
  return (
    <section className={css.wrapper}>
        <a className="anchor" id="projects"></a>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>


            {/* left side */}
            <div className={css.leftSide}>
            <span className="primaryText">Projects : </span>
                {
                    projects.map((exp, i)=> {
                        return <motion.div variants = {fadeIn("right", "tween", (i+1)*0.2, 1)} className={css.exp} key={i}>
                            
                            <div>
                                <span>{exp.name}</span>
                                <h4 >Tech Stack : {exp.techStack}</h4>
                                <ul>
                                    <li>{exp.point1}</li>
                                    <br></br>
                                    <li>{exp.point2}</li><br></br>
                                    <li>{exp.point3}</li>
                                    </ul> 

                            <a href="https://github.com/kongarichandrashekar8/BankApplication" ><exp.icon size={25} color="black"/></a>
                            </div>
                        </motion.div>
                    })
                }
            </div>


          
        </motion.div>
    </section>
  )
}

export default Projects