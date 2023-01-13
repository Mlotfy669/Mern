import React from 'react'
import { PhoneAndroid, Person } from '@mui/icons-material';
import styles from './index.module.scss'
import { NavLink, Link, useLocation } from 'react-router-dom';
import UserMenu from '../userMenu';
const Annouencement = () => {
    const location = useLocation()
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.phone}>
                    <PhoneAndroid className={styles.phoneIcon} />
                    <span>(+20) 1023272380</span>
                </div>
                {
                    location.pathname === `/login` || location.pathname === `/register` ?
                        <></> :
                        <div className={styles.annouencement}>
                            Get great devices up to 50% off
                            <Link to='shop'>  View details</Link>
                        </div>
                }
                {
                    location.pathname === `/login` || location.pathname === `/register` ?
                        <div className={styles.login}>
                            <Person className={styles.personIcon} />
                            <NavLink to='login' className={({ isActive }) => (isActive ? `${styles.active}` : ``)}>Login</NavLink>
                            <span> / </span>
                            <NavLink to='register' className={({ isActive }) => (isActive ? `${styles.active}` : ``)}>Register</NavLink>
                        </div> :
                        <UserMenu />
                }

            </div>
        </div>
    )
}

export default Annouencement