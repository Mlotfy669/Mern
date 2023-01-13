import React from 'react'
import OurCompany from '../../components/pagespecific/About/OurCompany'
import SecondSection from '../../components/pagespecific/About/Second'
import styles from './index.module.scss'

const About_Us = () => {
  return (
    <div className={styles.container}>
      <OurCompany />
      <SecondSection />
    </div>
  )
}

export default About_Us