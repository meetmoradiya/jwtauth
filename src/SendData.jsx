import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SendData = () => {
    const [title,setTitle]=useState("")
    const [description , setDescription]=useState("")
    const postData = {
        title,description
    }
    const token = localStorage.getItem("token")
    const handlepost = (e)=>{
        e.preventDefault()
        axios.post("https://authapireact.herokuapp.com/userpost" , postData , {
            headers:{
                'authorization':token
            }
        }).then((result)=>{
            console.log(result)
        })
    }
    useEffect(()=>{
        axios.get("https://authapireact.herokuapp.com/userdata" , {
            headers:{
                'authorization':token

            }
        }).then((result)=>{
            console.log(result)
        })
    },[])
    return (
        <div>
            <form onSubmit={handlepost}>
                <input type="text" name="title" id="title" onChange={(e)=>{setTitle(e.target.value)}}/>
                <input type="text" name="desc" id="desc" onChange={(e)=>{setDescription(e.target.value)}} />
                <button>Post Data</button>
            </form>
        </div>
    )
}

export default SendData
