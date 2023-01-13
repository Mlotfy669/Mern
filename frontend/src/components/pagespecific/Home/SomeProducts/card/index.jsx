import React, { useEffect } from 'react'
import { IconButton, Rating } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { FavoriteBorder, CompareArrows } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import styles from './index.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { AddShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, addItemToWishlist, addItemToCompare } from '../../../../../redux/slices/products';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "#088178",
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#088178",
    },
}));

const ProductCard = ({ item }) => {
    const cartData = useSelector(state => state.products?.value?.cart)
    const wishlistData = useSelector(state => state.products?.value?.wishlist)
    const compareData = useSelector(state => state.products?.value?.compare)
    const dispatch = useDispatch()
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    const AddItemCart = () => {
        const checkCart = cartData?.find(e => e.id === item.id)
        if (checkCart) {
            toast.error('This Item Added To Cart before')
        } else {
            dispatch(addItemToCart({ id: item.id }))
            toast.success('Add To Cart')
        }
    }
    const AddItemWishlist = () => {
        const checkWhishlist = wishlistData?.find(e => e.id === item.id)
        if (checkWhishlist) {
            toast.error('This Item Added To WishList before')
        } else {
            dispatch(addItemToWishlist({ id: item.id }))
            toast.success('Add To Wishlist')
        }
    }
    const AddItemCompare = () => {
        const checkCompare = compareData?.find(e => e.id === item.id)
        if (checkCompare) {
            toast.error('This Item Added To Compare before')
        } else {
            dispatch(addItemToCompare({ id: item.id }))
            toast.success('Add To Compare')
        }
    }
    return (
        <>
            <div className={styles.cardContainer} data-aos="fade-left">
                <div className={styles.UpperContainer}>
                    <div className={styles.imgContainer}>
                        <img src={item.image} alt="" />
                    </div>
                    <div className={styles.options}>
                        <CustomTooltip title="Add To Wishlist" placement="top" arrow>
                            <IconButton aria-label="cart" className={styles.Btn} onClick={AddItemWishlist}>
                                <FavoriteBorder className={styles.icon} />
                            </IconButton>
                        </CustomTooltip>
                        <CustomTooltip title="Compare" placement="top" arrow>
                            <IconButton aria-label="cart" className={styles.Btn} onClick={AddItemCompare}>
                                <CompareArrows className={styles.icon} />
                            </IconButton>
                        </CustomTooltip>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <span className={styles.brand}>armani</span>
                    <h2 className={styles.title} title={item.title}>{item.title}</h2>
                    <h6 className={styles.category}>{item.category}</h6>
                    <div className={styles.lowerContainer}>
                        <div className={styles.rate_race}>
                            <Rating name="read-only" size='small' value={item.rating.rate} readOnly precision={0.1} />
                            <span className={styles.price}>${item.price}</span>
                        </div>
                        <div className={styles.addToCart}>
                            <CustomTooltip title="Add To Cart" placement="top" arrow>
                                <IconButton aria-label="cart" className={styles.addBtn} onClick={AddItemCart}>
                                    <AddShoppingCart className={styles.icon} />
                                </IconButton>
                            </CustomTooltip>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ProductCard