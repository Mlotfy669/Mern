import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const FirstContainer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
}, [])
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} data-aos="fade-up">
        <h4 className={styles.getTouch}>Get In touch</h4>
        <h1>Let's Talk About <br /> Your Idea</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam a quasi corporis quisquam fugiat quas illum reprehenderit! Sint voluptates laborum, delectus quam minus ipsam debitis ut, aspernatur nostrum necessitatibus porro!</p>
        <div className={styles.btns}>
          <button>About Us</button>
          <button>Support Center</button>
        </div>
      </div>
    </div>
  )
}

export default FirstContainer