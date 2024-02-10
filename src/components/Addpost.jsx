import axios from 'axios'
import React, { useState } from 'react'
import BlogNav from './BlogNav'

const Addpost = () => {
    const [input,setInput] = new useState(
        {
            "userId":sessionStorage.getItem("userid"),
            "post":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        axios.post("http://localhost:3001/api/post/add",input).then(
            (response)=>{
                if (response.data.status=="success") {
                    alert("Success")
                } else if(response.data.status=="incorrect password") {
                    alert("Failed")
                }
            }
        )
    }
  return (
    <div>
        <BlogNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Post</label>
                            <input type="text" className="form-control"  name='post' value={input.post} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info" onClick={readValues}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addpost