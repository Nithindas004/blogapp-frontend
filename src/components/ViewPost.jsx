import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogNav from './BlogNav'

const ViewPost = () => {
    const [data,setData] = new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3001/api/post/view").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
        <BlogNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {
                            data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="card">
                                        <div className="card-header">
                                            Name : {value.userId.name}
                                        </div>
                                        <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{value.post}</li>
                                        <li className="list-group-item">Posted on : {value.posteddate}</li>
                                        
                                        </ul>
                                    </div>
                                    </div>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewPost