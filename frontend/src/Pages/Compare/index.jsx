import { Delete } from '@mui/icons-material'
import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { deleteItemCompare } from '../../redux/slices/products'
import styles from './index.module.scss'


const Compare = () => {
  const dispatch = useDispatch()
  const compare = useSelector(state => state.products?.value.compare)
  const { products, loading } = useSelector(state => state.products)
  const [someProducts, setSomeProducts] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    setSomeProducts(products)
    let filterCompare = compare.map(item => { return item.id })
    let filterAll = someProducts?.filter(item => filterCompare.includes(item.id))
    setResult(filterAll)
  }, [someProducts, products, compare])

  return (
    <div className={styles.Container}>
      <div className={styles.cartProductContainer}>
        {!loading && result?.length ?
          <table>
            <tbody>
              <tr>
                <th>Preview</th>
                {result.map((item, index) => (
                  <td key={index}>
                    <img src={item.image} alt="ima" />
                  </td>
                ))}
              </tr>
              <tr>
                <th>Name</th>
                {result.map((item, index) => (
                  <td key={index}>
                    <span className={styles.title} >{item.title}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <th>Price</th>
                {result.map((item, index) => (
                  <td key={index}>
                    <span >${item.price}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <th>Rating</th>
                {result.map((item, index) => (
                  <td key={index} >
                    <div className={styles.rating}>
                      <Rating name="read-only" size='small' value={item.rating.rate} readOnly precision={0.1} />
                      <span> ({item.rating.count})</span>
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <th>Description</th>
                {result.map((item, index) => (
                  <td key={index}>
                    <span>{item.description}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <th></th>
                {result.map((item, index) => (
                  <td key={index}>
                    <button onClick={() => dispatch(deleteItemCompare({ id: item.id }))}><Delete /> Remove</button>
                  </td>
                ))}
              </tr>
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

export default Compare