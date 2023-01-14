import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ShopCartItem from '../../components/pagespecific/shopCart'
import styles from './index.module.scss'

const ShoppingCart = () => {
  const cart = useSelector(state => state.products?.value.cart)
  const { products, loading } = useSelector(state => state.products)
  const [someProducts, setSomeProducts] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    setSomeProducts(products)
    let filterCart = cart.map(item => { return item.id })
    let filterAll = someProducts.filter(item => filterCart.includes(item.id))
    setResult(filterAll)

  }, [products, someProducts, cart])

  return (
    <div className={styles.Container}>
      <div className={styles.cartProductContainer}>
        {!loading && result?.length ?
          <table>
            <thead>
              <th>Item Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </thead>
            <tbody>
              {
                result.map((item, index) => (
                  <ShopCartItem item={item} key={index} index={index} />
                ))}
            </tbody>
          </table>
          : !loading && !result?.length &&
          <img src="./assets/images/notFound.png" alt='not found' />
        }
      </div>
    </div>
  )
}

export default ShoppingCart