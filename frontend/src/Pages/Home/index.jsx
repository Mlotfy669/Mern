import React from 'react'
import Services from '../../components/pagespecific/Home/Services'
import Slider from '../../components/pagespecific/Home/Slider'
import SomeProducts from '../../components/pagespecific/Home/SomeProducts'
const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <SomeProducts />
    </div>
  )
}

export default Home