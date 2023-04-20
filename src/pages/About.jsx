import React from 'react'
import styles from '../style'
import { Hero, Navbar } from '../component'


const About = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
     
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </div>
      </div> 
  )
}

export default About