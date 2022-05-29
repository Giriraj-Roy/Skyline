import React from 'react'
// import BtnSlider from './BtnSlider'
import dataSlider from '../assets/images/dataSlider'

const Recommendations = () => {


  return (
    <div className='recommendations'>
        {/* Hello From Recommendations */}
            {dataSlider.map((obj) => {
                return (
                    <div key={obj.id} className="recommend-card">

                        <img src={obj.img} alt={obj.title}/>
                        <hr/>
                    </div>
                )
            })}
    </div>
  )
}

export default Recommendations