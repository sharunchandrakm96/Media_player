// import React from 'react'
import Videocard from './Videocard'
import { getVideos } from '../services/allApis'
import { useEffect, useState } from 'react'

function Videos({addStatus}) {

  const [allvideos,setallvideos]=useState([])
  const [delStatus,setDelStatus]=useState({})

  useEffect(()=>{
    getdata()
  },[addStatus,delStatus])

  const getdata=async()=>{
    const res=await getVideos()
    // console.log(res.data)
    setallvideos(res.data)
    // console.log(allvideos)
  }
    return (
    <div className="bg-light border border-3 border-dark p-5">
      {
        allvideos?
        allvideos.map (item=>(
        <Videocard video={item} setDelStatus={setDelStatus}/>
        ))
        :
        <h1>No Videos</h1>
      }
      
    </div>
  )
}

export default Videos