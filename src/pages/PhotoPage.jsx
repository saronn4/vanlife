import React from 'react'
import { useOutletContext } from 'react-router-dom'

function PhotoPage() {

    const { vanDetail}= useOutletContext()
  return (
    <div>
        <img src={vanDetail.imageUrl} alt="" />

    </div>
  )
}

export default PhotoPage