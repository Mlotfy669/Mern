import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SecondSection = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer} data-aos="fade-up">
                <h3 className={styles.title}>M.LOTFY COPORATION</h3>
                <h1 className={styles.desc}>Our main branches <br /> around the world</h1>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium. ebitis nesciunt voluptatum dicta reprehenderit accusamus.</p>
            </div>
            <div className={styles.cards} >
                <div className={styles.card} data-aos="fade-up" >
                    <img src="./assets/images/about/company-1.jpg" alt="" />
                    <span className={styles.location}>New York, USA</span>
                    <span className={styles.location2}>27 Division St, New York <br /> NY 10002, USA</span>
                </div>
                <div className={styles.card} data-aos="fade-up">
                    <img src="./assets/images/about/company-2.jpg" alt="" />
                    <span className={styles.location}>Paris, France</span>
                    <span className={styles.location2}>22 Rue des Carmes <br /> 75005 Paris</span>
                </div>
                <div className={styles.card} data-aos="fade-up">
                    <img src="./assets/images/about/company-3.jpg" alt="" />
                    <span className={styles.location}>Jakarta, Indonesia</span>
                    <span className={styles.location2}>2476 Raya Yogyakarta, <br /> 89090 Indonesia</span>
                </div>
            </div>
        </div>
    )
}

export default SecondSection