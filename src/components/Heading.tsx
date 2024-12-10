import React from 'react'

const Heading = ({title} : {title : string}) => {
  return (
    <h2 className='text-center mb-20 font-integBold text-[48px]'>{title}</h2>
  )
}

export default Heading