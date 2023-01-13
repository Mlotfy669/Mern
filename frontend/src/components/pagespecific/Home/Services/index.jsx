import React, { useEffect, useState } from 'react'
import { services } from './data'
import Skeleton from '@mui/material/Skeleton';
import Aos from 'aos'
import 'aos/dist/aos.css'
import styles from './index.module.scss'
const Services = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])
  return (
    <div className={styles.container}>
      {loading ?
        services?.map((item, index) => (
          <Skeleton
            key={index}
            variant='rectangular'
            width={184}
            height={202}
            animation='wave'
          />
        ))
        :
        services?.map((item) => (
          <div className={styles.card} key={item.id} data-aos="fade-left">
            <img src={item.img} alt="" />
            <h4 style={{ backgroundColor: `${item.bg}` }}>{item.text}</h4>
          </div>
        ))
      }

    </div>
  )
}

export default Services