import { useEffect, useState } from "react"
import {  useContentStore } from "../store/useAuthStore"
import axios from "axios"
const baseUrl = import.meta.env.VITE_BASE_URL;


const useGetPopularContent=()=> {
    const [popularContent,setPopularContent] = useState(null)
    const {contentType} = useContentStore()

    useEffect(()=>{
        const getPopularMovie = async () =>{
           const res =  await axios.get(`${baseUrl}/api/v1/${contentType}/popular`)
           setPopularContent(res.data.content)
        }
        getPopularMovie()
    },[contentType])
    
    return{popularContent}
}

export default useGetPopularContent



	

