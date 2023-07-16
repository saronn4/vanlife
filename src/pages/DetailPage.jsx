import React from 'react'
import { useOutletContext } from 'react-router-dom'


function DetailPage() {
  const { vanDetail } = useOutletContext()

  return (
    <div className="detail-page">
        <h3>Name: <span>{vanDetail.name}</span></h3>
        <h3>Category: <span>{vanDetail.type}</span></h3>
        <h3>Description:  <span>{vanDetail.description}</span></h3>
        <h3>Visibility: <span>public</span></h3>
    </div>
  )
}

export default DetailPage