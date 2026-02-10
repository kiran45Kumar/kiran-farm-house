import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import client1_img from '../../assets/client1.jpg';
import client2_img from '../../assets/client2.jpg';
import client3_img from '../../assets/client3.jpg';
const Testimonial = () => {
  return (
    <>
      <div className='testimonial h-122 my-10 bg-[#FBF8F4]'>
        <div className='p-1'>
          <div>
            <div className='flex justify-between items-center gap-20 m-20'>
              <div className='eb-garamond-regular text-5xl text-[#616B1A]'>Words from people</div>
              <div className='flex items-center justify-center gap-5'>
                <div className='w-12 h-10 border border-[#404A3D] flex items-center justify-center rounded-md'><MdKeyboardArrowLeft cursor={"pointer"} fontSize={"18px"} /> </div>
                <div className='w-12 h-10 border border-[#404A3D] flex items-center justify-center rounded-md'><MdKeyboardArrowRight cursor={"pointer"} fontSize={"18px"} /> </div>
              </div>
            </div>
          </div>
          <div className='testimonial-cards flex items-center justify-evenly'>
            <div className='testimonial-card h-60 p-5 w-80 flex flex-col items-start justify-center gap-3 bg-[#FFFFFF] '>
              <div className='testimonial-stars flex items-center justify-center'>
                <BiSolidStar color='#FDCF00' />
                <BiSolidStar color='#FDCF00' />
                <BiSolidStar color='#FDCF00' />
                <BiSolidStar color='#FDCF00' />
                <BiSolidStarHalf color='#FDCF00' />
              </div>
              <div className='testimonial-card-text'>
                <p>“I would recommend practitioners at
                  this center to everyone! They are great
                  to work with and are excellent trainers.
                  Thank you all!”</p>
              </div>
              <div className='flex items-center gap-3'>
                <div>
                  <img src={client1_img} alt="" className='h-12 w-12 rounded-full border-2 border-solid border-b-amber-600' />
                </div>
                <div className='flex flex-col items-start'>
                  <h4 className=' text-shadow-lg signika-medium-500'>Martin Bailey</h4>
                  <p className='signika-medium-500 text-[12px] text-[#999999] font-light uppercase'>Supervisor</p>
                </div>
              </div>
            </div>
            <div className='testimonial-card h-60 p-5 w-80 flex flex-col items-start justify-center gap-3 bg-[#FFFFFF] '>
              <div className='testimonial-stars flex items-center justify-center'>
                <BiSolidStar color='#FDCF00' />
                <BiSolidStar color='#FDCF00' />
                <BiSolidStar color='#FDCF00' />
                <BiSolidStar color='#FDCF00' />
                <BiSolidStarHalf color='#FDCF00' />
              </div>
              <div className='testimonial-card-text'>
                <p>“I would recommend practitioners at
                  this center to everyone! They are great
                  to work with and are excellent trainers.
                  Thank you all!”</p>
              </div>
              <div className='flex items-center gap-3'>
                <div>
                  <img src={client2_img} alt="" className='h-12 w-12 rounded-full border-2 border-solid border-b-amber-600' />
                </div>
                <div className='flex flex-col items-start'>
                  <h4 className=' text-shadow-lg signika-medium-500'>Emma Greed</h4>
                  <p className='signika-medium-500 text-[12px] text-[#999999] font-light uppercase'>Customer</p>
                </div>
              </div>
            </div>
            <div className='testimonial-card h-60 p-5 w-80 flex flex-col items-start justify-center gap-3 bg-[#FFFFFF] '>
              <div className='testimonial-stars flex items-center justify-center'>
                <BiSolidStar color='#FDCF00' />
                <BiSolidStar color='#FDCF00' />
                <BiSolidStar color='#FDCF00' />
                <BiSolidStar color='#FDCF00' />
                <BiSolidStarHalf color='#FDCF00' />
              </div>
              <div className='testimonial-card-text'>
                <p>“I would recommend practitioners at
                  this center to everyone! They are great
                  to work with and are excellent trainers.
                  Thank you all!”</p>
              </div>
              <div className='flex items-center gap-3'>
                <div>
                  <img src={client3_img} alt="" className='h-12 w-12 rounded-full border-2 border-solid border-b-amber-600' />
                </div>
                <div className='flex flex-col items-start'>
                  <h4 className=' text-shadow-lg signika-medium-500'>Daniel Craig</h4>
                  <p className='signika-medium-500 text-[12px] text-[#999999] font-light uppercase'>Co Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
