import React from 'react'
import FirstContainer from '../../components/pagespecific/Contact/First'
import SecondContainer from '../../components/pagespecific/Contact/Second'
import ThirdContainer from '../../components/pagespecific/Contact/Third'
import styles from './index.module.scss'
const Contact = () => {
  return (
    <div className={styles.container}>
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
    </div>
  )
}

export default Contact