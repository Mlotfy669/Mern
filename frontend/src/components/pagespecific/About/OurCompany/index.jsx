import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurCompany = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer} data-aos="fade-right"> 
                <h3 className={styles.title}>OUR COMPANY</h3>
                <h1 className={styles.desc}>We are Building The Destination For Getting Things Done</h1>
                <p>Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices purus dolor erat bibendum sapien metus.</p>
                <p>Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices purus dolor erat bibendum sapien metus. Sit mi, pharetra, morbi arcu id. Pellentesque dapibus nibh augue senectus.</p>
            </div>
            <div className={styles.imgContainer} data-aos="fade-left">
                <img src="./assets/images/about-company.png" alt="our Company" />
            </div>
        </div>
    )
}

export default OurCompany