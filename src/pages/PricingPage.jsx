import React from 'react'
import { useOutletContext } from 'react-router-dom'

function PricingPage() {
    const { vanDetail} = useOutletContext()
  return (
    <div>
        <h3>{vanDetail.price}$ / Day</h3>

    </div>
  )
}

export default PricingPage