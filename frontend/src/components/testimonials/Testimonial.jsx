import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidStar, BiStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import client1_img from '../../assets/client1.jpg';
import { getTestimonials } from '../../api/api';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";

import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';

import '@splidejs/splide/css/core';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const splideRef = useRef(null);
  const renderStars = (rating) => {
    const stars = [];

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <BiSolidStar key={`full-${i}`} color="#FDCF00" size={20} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <BiSolidStarHalf key="half" color="#FDCF00" size={20} />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <BiStar key={`empty-${i}`} color="#FDCF00" size={20} />
      );
    }

    return stars;
  };
  useEffect(() => {
    const fetchTotals = async () => {
      try {
        const data = await getTestimonials();
        console.log(data);
        setTestimonials(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotals();
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  const nextSlide = () => {
    if (currentIndex < testimonials.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <>
      <div className='testimonial p-5  bg-[#FBF8F4]'>
        <div className=''>
          <div>
            <div className='flex justify-between items-center gap-20 m-20'>
              <div className='eb-garamond-regular text-5xl text-[#616B1A] p-2 mt-10'>Words from people</div>
              <div className='flex items-center justify-center gap-5 p-2 mt-10'>
                <div onClick={() => splideRef.current?.go("<")} className=' cursor-pointer w-12 h-10 border border-[#404A3D] flex items-center justify-center rounded-md'>
                  <MdKeyboardArrowLeft fontSize={"18px"} cursor={"pointer"} />
                </div>

                <div onClick={() => splideRef.current?.go(">")} className=' cursor-pointer w-12 h-10 border border-[#404A3D] flex items-center justify-center rounded-md'>
                  <MdKeyboardArrowRight fontSize={"18px"} cursor={"pointer"} />
                </div>
              </div>
            </div>
          </div>
          <div className='overflow-hidden px-20'>

          </div>
          <div className="px-20">
            <Splide
              ref={splideRef}
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                gap: "1.5rem",
                pagination: false,
                arrows: false,
                breakpoints: {
                  1024: {
                    perPage: 2,
                  },
                  640: {
                    perPage: 1,
                  },
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SplideSlide key={index}>
                  <div className='testimonial-card h-60 p-5 w-80 flex flex-col items-start justify-center gap-3 bg-[#FFFFFF]'>

                    <div className='testimonial-stars flex items-center justify-center'>
                      {renderStars(testimonial.rating)}
                    </div>

                    <div className='testimonial-card-text'>
                      <p>{testimonial.message}</p>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div>
                        <img
                          src={client1_img}
                          alt=""
                          className='h-12 w-12 rounded-full border-2 border-solid border-b-amber-600'
                        />
                      </div>

                      <div className='flex flex-col items-start'>
                        <h4 className='text-shadow-lg signika-medium-500'>
                          {testimonial.name}
                        </h4>
                        <p className='signika-medium-500 text-[12px] text-[#999999] font-light uppercase'>
                          Supervisor
                        </p>
                      </div>
                    </div>

                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

        </div>
      </div>
    </>
  )
}

export default Testimonial
