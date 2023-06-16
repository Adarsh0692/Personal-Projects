import React, { useEffect } from 'react'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pizza from '../components/Pizza'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../store/slice';

function Home() {
  const dispatch = useDispatch()
  const {data, loading, error} = useSelector(state => state.users)
 
  useEffect(() => {
    dispatch(getAllData())
  } ,[])

  if(loading) return <p>loading...</p>
  if(error) return <p>something went wrong...</p>

  return (
    <div>
      <Header/>
      <ToastContainer position='top-center' autoClose={2000} />
       <div className="row ">
        {
          data.map((pizza) => (
            <div className="col-md-4 py-4 px-2">
               <Pizza pizza={pizza}/>
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default Home
