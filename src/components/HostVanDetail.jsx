import React, { useEffect, useState } from 'react'
import { useParams , Link, Outlet, NavLink } from 'react-router-dom'


function HostVanDetail() {
    const params = useParams()
    const[vanDetail , setVanDetail] = useState(null)
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVanDetail(data.vans))
    },
    [params.id])

  return (
    <div>
        <Link to="/host/vans">back to all vans </Link>

        <div className="van-detail-container">
            {vanDetail ?(<>
            <div className="box">
                <img src={vanDetail.imageUrl} alt="" />
                <div className="info">
                <i className={`van-type ${vanDetail.type} selected`}>{vanDetail.type}</i>
                    <h2>{vanDetail.name}</h2>
                    <h6>{vanDetail.price}/day</h6>
                </div>
            </div> 
                      <nav className="host-van-detail-nav">
                        <NavLink end className={(obj)=> obj.isActive ? "active-link" : null} to=".">Detail</NavLink>
                        <NavLink className={(obj)=> obj.isActive ? "active-link" : null} to="pricing">Pricing</NavLink>
                        <NavLink className={(obj)=> obj.isActive ? "active-link" : null} to="photo">Photo</NavLink>

                      </nav> 
                     <Outlet context={{ vanDetail }}/> 
                    </>) : <h1>Loading ...</h1>}
        </div>

    </div>
  )
}

export default HostVanDetail