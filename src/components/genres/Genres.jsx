import React from 'react'
import './style.scss'
import { useSelector } from 'react-redux'

function Genres({data}) {
    const {genres} = useSelector((state) => state.home)
   
  return (
    <div className='genres'>
        {data?.map((g, index) => {
            return (
                <div key={index} className="genre">
                    {genres[g]?.name}
                </div>
            )
        })}
    </div>
  )
}

export default Genres
