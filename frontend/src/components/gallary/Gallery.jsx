import React from "react";
import gallery_img1 from "../../assets/gallery-img1.jpg";
import gallery_img2 from "../../assets/gallery-img2.jpg";
import gallery_img3 from "../../assets/gallery-img3.jpg";
import gallery_img4 from "../../assets/gallery-img4.jpg";
import gallery_img5 from "../../assets/gallery-img5.jpg";
import gallery_img6 from "../../assets/gallery-img6.jpg";
import gallery_img7 from "../../assets/gallery-img7.jpg";
import gallery_img8 from "../../assets/gallery-img8.jpg";

const Gallery = () => {
  return (
    <>
      <div className="gallery p-5">
        <div className="gallery-list m-5">
          <ul className="flex items-center justify-center gap-20 cursor-pointer roboto-regular-400 text-[#404A3D]">
            <li className="flex items-center justify-center h-15 w-30 rounded-full text-white bg-[#404A3D] rounded-">
              All
            </li>
            <li>Agriculture</li>
            <li>Extensive</li>
            <li>Farming Tips</li>
            <li>Food Crops</li>
            <li>Mixed Farming</li>
            <li>Organic Farm</li>
          </ul>
        </div>
        <div className="flex items-center justify-evenly flex-wrap gap-4">
          <div className="gallery-card">
            <img
              src={gallery_img1}
              alt="gallery_img"
              className="gallery-card-img"
              loading="lazy"
            />

            <div className="gallery-overlay">
              <h3>Image Title</h3>
              <p>Short description goes here</p>
            </div>
          </div>
          <div className="gallery-card">
            <img
              src={gallery_img2}
              alt="gallery_img"
              className="gallery-card-img cursor-pointer"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h3>Image Title</h3>
              <p>Short description goes here</p>
            </div>
          </div>
          <div className="gallery-card">
            <img
              src={gallery_img3}
              alt="gallery_img"
              className="gallery-card-img cursor-pointer"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h3>Image Title</h3>
              <p>Short description goes here</p>
            </div>
          </div>
          <div className="gallery-card">
            <img
              src={gallery_img4}
              alt="gallery_img"
              className="gallery-card-img cursor-pointer"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h3>Image Title</h3>
              <p>Short description goes here</p>
            </div>
          </div>
          <div className="gallery-card">
            <img
              src={gallery_img5}
              alt="gallery_img"
              className="gallery-card-img cursor-pointer"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h3>Image Title</h3>
              <p>Short description goes here</p>
            </div>
          </div>
          <div className="gallery-card">
            <img
              src={gallery_img6}
              alt="gallery_img"
              className="gallery-card-img cursor-pointer"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h3>Image Title</h3>
              <p>Short description goes here</p>
            </div>
          </div>
          <div className="gallery-card">
            <img
              src={gallery_img7}
              alt="gallery_img"
              className="gallery-card-img cursor-pointer"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h3>Image Title</h3>
              <p>Short description goes here</p>
            </div>
          </div>
          <div className="gallery-card">
            <img
              src={gallery_img8}
              alt="gallery_img"
              className="gallery-card-img cursor-pointer"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h3>Image Title</h3>
              <p>Short description goes here</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-5 p-5">
        <button className="signika-medium-500 w-35 text-white cursor-pointer h-10 bg-[#5B8C51] rounded-full">
          More
        </button>
      </div>
    </>
  );
};

export default Gallery;
