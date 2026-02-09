import React from 'react'

const Title = ({title, description}) => {
  return (
   <>
    <div className='flex items-center justify-center flex-col p-5 m-5'>
        <h2 className='ephesis-regular text-[50px] text-[#7D6A0B]'>{title}</h2>
        <h1 className='eb-garamond-regular text-[75px] my-4 text-[#000000]'>{description}</h1>
    </div>
   </>
  )
}

export default Title
