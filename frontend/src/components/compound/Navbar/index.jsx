import { CompareArrows, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import React from 'react';
import Logo from '../Logo';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './index.module.scss';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    background: '#088178',
    color: 'white'
  },
}));


const Navbar = () => {
  const location = useLocation();
  const productsSlice = useSelector(state => state?.products?.value)

  return (
    <>
      {
        location.pathname === `/login` || location.pathname===`/register` ?
          <></> :
          <div className={styles.Container}>
            <div className={styles.wrapper}>
              <Logo />
              <div className={styles.menu}>
                <NavLink to='/' className={({ isActive }) => (isActive ? `${styles.active}` : ``)}>Home</NavLink>
                <NavLink to='shop' className={({ isActive }) => (isActive ? `${styles.active}` : ``)}>Shop</NavLink>
                <NavLink to='contact' className={({ isActive }) => (isActive ? `${styles.active}` : ``)}>Contact</NavLink>
                <NavLink to='about' className={({ isActive }) => (isActive ? `${styles.active}` : ``)}>About Us</NavLink>
              </div>
              <div className={styles.Badges}>
                <NavLink to='shopping-cart'>
                  <Tooltip title="Cart" placement="top" arrow>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={productsSlice?.cart?.length === 0 ? '0' : productsSlice?.cart?.length} >
                        <ShoppingCart className={styles.icon} />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </NavLink>
                <NavLink to='wishlist'>
                  <Tooltip title="Wishlist" placement="top" arrow>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={productsSlice?.wishlist?.length === 0 ? '0' : productsSlice?.wishlist?.length} >
                        <FavoriteBorder className={styles.icon} />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </NavLink>
                <NavLink to='compare'>
                  <Tooltip title="Compare" placement="top" arrow>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={productsSlice?.compare.length === 0 ? '0' : productsSlice?.compare.length} >
                        <CompareArrows className={styles.icon} />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </NavLink>
              </div>
            </div>
          </div >
      }
    </>

  )
}

export default Navbar