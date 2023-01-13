import { Delete } from '@mui/icons-material'
import { Rating } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { deleteItemCompare } from '../../redux/slices/products'
import styles from './index.module.scss'


const Compare = () => {
  const dispatch = useDispatch()
  const compare = useSelector(state => state.products?.value.compare)
  const [someProducts, setSomeProducts] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setSomeProducts(response.data)
        let filterCompare = compare.map(item => { return item.id })
        let filterAll = someProducts?.filter(item => filterCompare.includes(item.id))
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
            <tbody>
              <tr>
                <th>Preview</th>
                {result.map((item, index) => (
                  <td>
                    <img key={index} src={item.image} />
                  </td>
                ))}
              </tr>
              <tr>
                <th>Name</th>
                {result.map((item, index) => (
                  <td>
                    <span className={styles.title} key={index}>{item.title}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <th>Price</th>
                {result.map((item, index) => (
                  <td>
                    <span key={index}>${item.price}</span>
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
                  <td>
                    <span key={index}>{item.description}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <th></th>
                {result.map((item, index) => (
                  <td>
                    <button key={index} onClick={() => dispatch(deleteItemCompare({ id: item.id }))}><Delete /> Remove</button>
                  </td>
                ))}
              </tr>
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

export default Compare