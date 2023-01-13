import { AddShoppingCart, Delete } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addItemToCart, deleteItemWishlist } from '../../../redux/slices/products'
import styles from './index.module.scss'

const WhishlistItem = ({item ,index}) => {
    const cartData = useSelector(state => state.products?.value.cart)
    const dispatch = useDispatch()
    const AddItemCart = () => {
        const checkCart = cartData?.find(e => e.id === item.id)
        if (checkCart) {
            toast.error('This Item Added To Cart before')
        } else {
            dispatch(addItemToCart({ id: item.id }))
            toast.success('Add To Cart')
        }
    }
    return (
        <tr className={styles.container} key={item.id}>
            <th><span>{index + 1}</span></th>
            <th><img src={item.image} alt="" /></th>
            <th>
                <span className={styles.title} title={item.title}>{item.title}</span>
            </th>
            <th><span className={styles.price} title="item price">${item.price}</span></th>
            <th><button className={styles.add} onClick={AddItemCart} title="Add Item"><AddShoppingCart /></button></th>
            <th><button className={styles.remove} onClick={() => dispatch(deleteItemWishlist({ id: item.id }))} title="remove Item"><Delete /></button></th>
        </tr>
    )
}

export default WhishlistItem