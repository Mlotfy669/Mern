import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'
import axios from 'axios'
import ShopCartItem from '../../components/pagespecific/shopCart'

const ShoppingCart = () => {
  const cart = useSelector(state => state.products?.value.cart)
  const [someProducts, setSomeProducts] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setSomeProducts(response.data)
        let filterCart = cart.map(item => { return item.id })
        let filterAll = someProducts.filter(item => filterCart.includes(item.id))
        setResult(filterAll)
      } catch (err) {
        console.log('err')
      }
    }
    getResponse()
  }, [])

  return (
    <div className={styles.Container}>
      <div className={styles.cartProductContainer}>
        {result.length ?
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
                  <ShopCartItem item={item} index={index} />
                ))}
            </tbody>
          </table>
          :
          <img src="./assets/images/notFound.png" />
        }
      </div>
    </div>
  )
}

export default ShoppingCart