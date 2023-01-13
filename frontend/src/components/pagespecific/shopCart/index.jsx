import { Add, Delete, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useDispatch } from 'react-redux'
import { deleteItemCart } from '../../../redux/slices/products'


const ShopCartItem = ({ item, index }) => {
    const dispatch = useDispatch()
    const [quantity, setquantity] = useState(1)
    const [total, setTotal] = useState(item.price)
    useEffect(() => {
        setTotal(quantity * item.price)
    }, [quantity, item.price])

    return (
        <tr className={styles.container} key={item.id}>
            <th><span>{index + 1}</span></th>
            <th><img src={item.image} alt="" /></th>
            <th>
                <span className={styles.title} title={item.title}>{item.title}</span>
            </th>
            <th>
                <span className={styles.category} title="item category">{item.category}</span>
            </th>
            <th><span className={styles.price} title="item price">${item.price}</span></th>
            <th><div className={styles.quantity} >
                <button onClick={() => setquantity(quantity === 1 ? 1 : quantity - 1)}><Remove /></button>
                <span>{quantity < 1 ? "1" : quantity}</span>
                <button onClick={() => setquantity(quantity + 1)}><Add /></button>
            </div></th>
            <th><span className={styles.subtotal} title="total price">${total < item.price ? item.price : total}</span></th>
            <th><button className={styles.remove} onClick={() => dispatch(deleteItemCart({ id: item.id }))} title="remove Item"><Delete /></button></th>
        </tr>
    )
}

export default ShopCartItem