import { DoubleArrow } from '@mui/icons-material'
import { Skeleton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ProductCard from './card'
import styles from './index.module.scss'


const SomeProducts = () => {
    const {products , error , loading} = useSelector(state => state.products)

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Our <span>Products</span></h2>
            <Link to='shop' className={styles.showMore}>Show More <DoubleArrow className={styles.arrowIcon}/> </Link>
            <div className={styles.wrapper}>
                {loading ?
                    [...Array(10)].map((_,index) => (
                        <Skeleton
                            variant='rectangular'
                            width={184}
                            height={202}
                            animation='wave'
                            key={index}
                        />
                    )) :
                    products?.slice(0,10).map((item ,index) => (
                        <ProductCard item={item} key={index} />
                    ))
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default SomeProducts