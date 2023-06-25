import React from 'react'
import './style.scss'
import { useSelector } from 'react-redux'

function Genres({data}) {
    const {genres} = useSelector((state) => state.home)
  return (
    <div className='genres'>
        {data?.map((g) => {
            return (
                <div key={g.id} className="genre">
                    {genres[g]?.name}
                </div>
            )
        })}
    </div>
  )
}

export default Genres
