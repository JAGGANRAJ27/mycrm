import React from 'react'

const Buttonv1 = (props) => {
  return (
    <div>
      <button className='button'>
        {props.children}
      </button>
    </div>
  )
}

export default Buttonv1