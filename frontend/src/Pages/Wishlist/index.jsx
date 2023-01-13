import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'
import axios from 'axios'
import WhishlistItem from '../../components/pagespecific/wishlist'
import { ToastContainer } from 'react-toastify'

const WishList = () => {

  const wishlist = useSelector(state => state.products?.value.wishlist)
  const [someProducts, setSomeProducts] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setSomeProducts(response.data)
        let filterWishlist = wishlist.map(item => { return item.id })
        let filterAll = someProducts.filter(item => filterWishlist.includes(item.id))
        setResult(filterAll)
      } catch (err) {
        console.log('err')
      }
    }
    getResponse()
  }, [someProducts])

  return (
    <div className={styles.Container}>
      <div className={styles.cartProductContainer}>
        {result.length ?
          <table>
            <thead>
              <th>Item Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Add to Cart</th>
              <th>Remove</th>
            </thead>
            <tbody>
              {
                  result.map((item, index) => (
                    <WhishlistItem item={item} index={index} />
                  )) 
              }

            </tbody>
          </table>
          :
          <img src="./assets/images/notFound.png" />
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default WishList