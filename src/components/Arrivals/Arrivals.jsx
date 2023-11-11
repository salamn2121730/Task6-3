import CardArrival from '../CardArrival/CardArrival';
import './Arrivals.css'
import { useEffect, useState } from 'react'

const Arrivals = () => {
    const [val, setValue] = useState(null);
    useEffect(() => {
        fetch('https://dummyjson.com')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setValue(data);
              
            })

    })
  return (
    <div>
        <div class="container arrivals" >
        <h1 class="text-center">NEW ARRIVALS</h1>
        <p class="text-center">FIND THE PERFECT PHONE FOR YOU</p>
        <div class="cardarrivals">
        {val && <CardArrival val={val} />}
        </div>
    </div>
    </div>
  )
}

export default Arrivals