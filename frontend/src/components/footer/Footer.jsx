import React from 'react'
import group_img from '../../assets/Group.png';
import face_img from '../../assets/fb.png';
import map_img from '../../assets/map.png';
const Footer = () => {
  return (
    <>
      <div className='footer mt-10 text-white'>
        <div className='py-10' >
          <div className='flex justify-evenly mt-20'>
            <div >
              <h1 className='m-2'>OUR PLACE</h1>
              <p className='m-2'>123, Anywhere Street, <br />  Hyd  000001</p>
              <p className='m-2'>Call: 1234567890</p>
              <p className='m-2'>Follow us on</p>
              <div className='flex items-center justify-start gap-2'>
                <img src={group_img} alt="" className='object-cover' />
                <img src={face_img} alt="" className='object-cover' />
              </div>
            </div>
            <div>
              <h2>Quick Links</h2>
              <ul>
                <li className='m-2 cursor-pointer'>Home</li>
                <li className='m-2 cursor-pointer'>Reservation</li>
                <li className='m-2 cursor-pointer'>Gallery</li>
                <li className='m-2 cursor-pointer'>Contact</li>
                <li className='m-2 cursor-pointer'>FAQ</li>
              </ul>
            </div>
            <div>
              <img src={map_img} alt="" className='h-50 w-90 object-cover rounded-[50px]' />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Footer
