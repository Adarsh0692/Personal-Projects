import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Switchtabs from '../../../components/switchTabs/Switchtabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


function Popular() {
    const [endPoint, setEndPoint] = useState('movie')

    const {data, loading} = useFetch(`/${endPoint}/popular`)
    const onTabChange = (tab) => {
         setEndPoint(tab === 'Movies' ? 'movie' : 'tv')
    }
  return (
    <div className='carouselSelection'>
        <ContentWrapper>
            <span className='carouselTitle'>What's Popular</span>
            <Switchtabs data={['Movies', 'Tv Shows']} onTabChange={onTabChange}/>
            
        </ContentWrapper>
        <Carousel data= {data} loading={loading} endPoint={endPoint}/>
      
    </div>
  )
}

export default Popular;
