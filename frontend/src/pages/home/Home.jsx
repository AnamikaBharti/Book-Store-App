import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
 
import Recommended from './Recommended'
import News from './news'

const Home = () => {
  return (
    <>
    <div className="px-8 py-6">
    <Banner/>
    <TopSellers/>
    <Recommended/>
    <News/>
    </div>
    </>
  )
}

export default Home
