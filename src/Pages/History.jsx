import React,{useEffect, useState} from 'react'
import { deletehistory, gethistory } from '../services/allApis'

function History() {
  const [his,sethis]=useState([])
  const [delStatus,setdelStatus]=useState({})

  useEffect(()=>{
    getData()
  },[delStatus])

  const getData=async()=>{
    const res=await gethistory()
    console.log(res.data)
    sethis(res.data)
  }

  const handleDelete= async(id)=>{
    console.log(id)
    const res=await deletehistory(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
     setdelStatus(res)
    
     toast.success("delete vedio successfully!!")
    }
    else{
     toast.error("delete vedio failed!!")
    }
 }

  return (
    <>
    <div className='p-5'>
      <h1>Watch History</h1>
      <table className='table table-bordered'>
          <tr>
            <th>caption</th>
            <th>url</th>
            <th>Date & Time</th>
            <th></th>
          </tr>
          {
            his?
            his.map(item=>(

              <tr>
                <td>{item.caption}</td>
                <td>{item.url}</td>
                <td>{item.datetime}</td>
                <td>
                <i className='fa-solid fa-trash text-light' onClick={()=>{handleDelete(item.id)}}></i>
                </td>
              </tr>
             ))
            :
            <tr>
              <p className='text-danger'>No watch history</p>
            </tr>
          }
      </table>
    </div>
    </>
  )
}

export default History