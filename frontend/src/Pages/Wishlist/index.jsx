import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import WhishlistItem from '../../components/pagespecific/wishlist';
import styles from './index.module.scss';

const WishList = () => {

  const wishlist = useSelector(state => state.products?.value.wishlist)
  const { products, loading } = useSelector(state => state.products)
  const [someProducts, setSomeProducts] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    setSomeProducts(products)
    let filterWishlist = wishlist.map(item => { return item.id })
    let filterAll = someProducts.filter(item => filterWishlist.includes(item.id))
    setResult(filterAll)
  }, [products, someProducts, wishlist])

  return (
    <div className={styles.Container}>
      <div className={styles.cartProductContainer}>
        {!loading && result?.length ?
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
                result?.map((item, index) => (
                  <WhishlistItem item={item} key={index} index={index} />
                ))
              }

            </tbody>
          </table>
          : !loading && !result?.length &&
        <img src="./assets/images/notFound.png" alt='not found' />
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default WishList