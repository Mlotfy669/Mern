import { AttachEmail } from '@mui/icons-material'
import React from 'react'

import styles from './index.module.scss'

const NewsLetter = () => {

  return (
    <div className={styles.Container} >
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <AttachEmail />
                <span>Sign up to Newsletter</span>
            </div>
            <div className={styles.center}>
                ...and receive $25 coupon for first <br /> shopping.
            </div>
            <div className={styles.right}>
                <input type="text"  placeholder='Enter Your E-mail'/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter