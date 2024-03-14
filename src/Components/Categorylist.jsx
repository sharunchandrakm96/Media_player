import React, { useEffect, useState } from "react";
import { getCategories, getSpecificVideo, updatecategory } from "../services/allApis";
import { deleteCategories } from "../services/allApis";
import {toast} from 'react-toastify'
import Videocard from "./Videocard";


function Categorylist({status}){
   const [cat,setCat]=useState([]) 
   const [delStatus,setDelStatus]=useState({})

  

   useEffect(()=>{
    getCat()
   },[status,delStatus])

   const getCat=async()=>{
    const res=await getCategories()
    console.log(res.data)
    setCat(res.data)
   }

   const handleDelete=async(id)=>{
    console.log(id)
    const res=await deleteCategories(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
        setDelStatus(res)
        toast.success("category Deleted Successfully!!")
    }
    else{
        toast.error("category Deletion Faild!!!")
    }
   }

   const handleDrop=async(e,id)=>{
    // console.log("category id:"+id)
    const vid=e.dataTransfer.getData("videoid")
    // console.log("droped video id:"+vid)
    let category=cat.find(item=>item.id==id)
    // console.log(category)
    const res=await getSpecificVideo(vid)
    category.videos.push(res.data)
    // console.log(category)
    const rescat=await updatecategory(category,id)
    if(rescat.status>=200 && rescat.status<300){
        toast.success(`${res.data.caption} is added to ${category.name}`)
        getCat()
    }
    else{
        toast.error("video adding to category failed!!")
    }
   }

   const handleDragOver=(e)=>{
    e.preventDefault()
    console.log("Droping over category")
   }

   return(
    <>
    <div className="border border-light p-3 mt-3">
         {
            cat?
            cat.map(item=>(
                <div className="bg-primary mb-3 p-3 rounded shadow" onDragOver={e=>{handleDragOver(e)}} droppable onDrop={e=>{handleDrop(e,item?.id)}}>
                    <span>{item.name}</span>
                    <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelete(item.id)}} style={{color:'#f50000'}}></i>

                    <div>
                        {
                            item?.videos.map(v=>(
                                <Videocard video={v} cat={true}/>
                            ))
                        }
                    </div>
                </div>
                
            ))
            :
            <h1>No Categories</h1>
         }
    </div>
    </>
   )
}

export default Categorylist
