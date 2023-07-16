import React, { useEffect, useState } from 'react'
import { Link , useSearchParams } from 'react-router-dom'

function Vans() {


    const [vans , setVans]=useState([])

const [searchParams , setSearchParams]= useSearchParams()

const type = searchParams.get("type")

const displayedData = type 
? vans.filter(item => item.type === type)
:vans

    useEffect(()=>{
     fetch("/api/vans")
     .then(res => res.json())
     .then(data => setVans(data.vans))
     
    },[])

 
    const vanElements = displayedData.map(van=>(
        <div id={van.id} className="van-title">
            <Link to={`/vans/${van.id}`}>
            <img src={van.imageUrl}  />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>{van.price} <span>/Day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>

        </div>
    ))

  return (

    <div className="van-list-container">
        <h1>explore Our van options !</h1>
        <div className='van-types'>
        <Link className='van-type simple selected' to=".">All</Link>
            <Link className='van-type rugged selected' to="?type=rugged">rugged</Link>
            <Link className='van-type simple selected' to="?type=simple">Simple</Link>
            <Link className='van-type luxury selected' to="?type=luxury">luxury</Link>
        </div>
        <div className="van-list">
        
        {vanElements}
        
  
            </div> 
     
    </div>
  )
}

export default Vans