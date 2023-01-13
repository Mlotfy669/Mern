import { LocationOn } from '@mui/icons-material'
import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const SecondContainer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
}, [])
  return (
    <div className={styles.container}>
      <div className={styles.card} data-aos="fade-up">
        <span className={styles.cartTitle}>Office</span>
        <div className={styles.innerCart}>
          <span className={styles.cartAddress}>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</span>
          <div className={styles.phone}>
            <span className={styles.text} title="Phone">Phone:</span>
            <span className={styles.number}>(+20)1023272380</span>
          </div>
          <div className={styles.email}>
            <span className={styles.text} title="Email">Email:</span>
            <span className={styles.number}>M.lotfy9966@gmail.com</span>
          </div>
        </div>
        <button><LocationOn /> View map</button>
      </div>
      <div className={styles.card} data-aos="fade-up">
        <span className={styles.cartTitle}>Studio</span>
        <div className={styles.innerCart}>
          <span className={styles.cartAddress}>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</span>
          <div className={styles.phone}>
            <span className={styles.text} title="Phone">Phone:</span>
            <span className={styles.number}>(+20)1023272380</span>
          </div>
          <div className={styles.email}>
            <span className={styles.text} title="Email">Email:</span>
            <span className={styles.number}>M.lotfy9966@gmail.com</span>
          </div>
        </div>
        <button><LocationOn /> View map</button>
      </div>
      <div className={styles.card} data-aos="fade-up">
        <span className={styles.cartTitle}>Shop</span>
        <div className={styles.innerCart}>
          <span className={styles.cartAddress}>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</span>
          <div className={styles.phone}>
            <span className={styles.text} title="Phone">Phone:</span>
            <span className={styles.number}>(+20)1023272380</span>
          </div>
          <div className={styles.email}>
            <span className={styles.text} title="Email">Email:</span>
            <span className={styles.number}>M.lotfy9966@gmail.com</span>
          </div>
        </div>
        <button><LocationOn /> View map</button>
      </div>
    </div>
  )
}

export default SecondContainer