import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const ThirdContainer = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.wrapper} data-aos="fade-up">
                <h2>Drop Us a Line</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <form>
                    <div>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Your Email' />
                    </div>
                    <div>
                        <input type="tel" placeholder='Your Phone' />
                        <input type="text" placeholder='Subject' />
                    </div>
                    <textarea placeholder='Message'></textarea>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ThirdContainer