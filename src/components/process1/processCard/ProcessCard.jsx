import React from 'react'

const ProcessCard = (props) => {
  return (
    <div className="step" data-aos={props.aos}>
        <img className='step-img' src={props.img} alt="" />
            <div className="step-body">
                {[props.children]}
            </div>
      </div>
  )
}

export default ProcessCard