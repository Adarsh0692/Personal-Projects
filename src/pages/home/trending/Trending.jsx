import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Switchtabs from '../../../components/switchTabs/Switchtabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


function Trending() {
    const [endPoint, setEndPoint] = useState('day')

    const {data, loading} = useFetch(`/trending/all/${endPoint}`)
    const onTabChange = (tab) => {
         setEndPoint(tab === 'Day' ? 'day' : 'week')
    }
  return (
    <div className='carouselSelection'>
        <ContentWrapper>
            <span className='carouselTitle'>Trending</span>
            <Switchtabs data={['Day', 'Month']} onTabChange={onTabChange}/>
            
        </ContentWrapper>
        <Carousel data= {data} loading={loading}/>
      
    </div>
  )
}

export default Trending
