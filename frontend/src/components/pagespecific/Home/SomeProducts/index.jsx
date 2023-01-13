import { Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './card'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { DoubleArrow } from '@mui/icons-material'
import { ToastContainer } from 'react-toastify'


const SomeProducts = () => {
    const [somePdoducts, setSomePdoducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setSomePdoducts(res.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

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
                    somePdoducts?.slice(0,10).map((item ,index) => (
                        <ProductCard item={item} key={index} />
                    ))
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default SomeProducts