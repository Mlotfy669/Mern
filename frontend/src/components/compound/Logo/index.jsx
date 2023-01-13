import React from 'react'
import { Link , useLocation } from 'react-router-dom'
import styles from './index.module.scss'
const Logo = () => {

    const location = useLocation()
    const currentLocation = location.pathname === '/login' ? '/login' : location.pathname === '/register' ? '/register' : '/'
    

    return (
        <div className={styles.logo}>
            <Link to={currentLocation}>
                <img src="./assets/images/logo.png" alt="" />
                <span>M.Lotfy</span>
            </Link>
        </div>
    )
}

export default Logo