import React from 'react'
import { Hero, CTA, Footer, Business, CardDeal, Clients } from '../component'
import FeedbackCard from '../component/FeedbackCard'
import styles from '../style'


const Homepage = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
     
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <Hero />
          <Business />
          <CardDeal />
          <Clients />
          <CTA />
          <Footer />
      </div>
    </div>
    </div> 
  )
}

export default Homepage