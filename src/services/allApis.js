import commenApi from "./commenApi"
import { BASE_URL } from "./base_url"

export const uploadVideo=async(data)=>{
    return await commenApi("POST",`${BASE_URL}/allvideos`,data)
}

export const getVideos=async()=>{
    return await commenApi("GET",`${BASE_URL}/allvideos`,"")
}

export const deleteVideo=async(id)=>{
    return await commenApi("DELETE",`${BASE_URL}/allvideos/${id}`,{})
}

export const addCategory=async(data)=>{
    return await commenApi("POST",`${BASE_URL}/categories`,data)
}

export const getCategories=async()=>{
    return await commenApi("GET",`${BASE_URL}/categories`,"")
}

export const deleteCategories=async(id)=>{
    return await commenApi("DELETE",`${BASE_URL}/categories/${id}`,{})
}

export const addhistory=async(data)=>{
    return await commenApi("POST",`${BASE_URL}/history`,data)
}

export const gethistory=async()=>{
    return await commenApi("GET",`${BASE_URL}/history`)
}

export const deletehistory=async(id)=>{
    return await commenApi("DELETE",`${BASE_URL}/history/${id}`,{})
  }

export const getSpecificVideo=async(id)=>{
    return await commenApi("GET",`${BASE_URL}/allvideos/${id}`,"")
}

export const updatecategory=async(data,id)=>{
    return await commenApi("PUT",`${BASE_URL}/categories/${id}`,data)
}