import { useEffect, useState } from "react";
import { getGalleries, getCategories } from "../../api/api";
import { io } from 'socket.io-client';
const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const socket = io("http://localhost:5000");
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const data = await getGalleries();
        setGalleries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGalleries();
    socket.on('gallery-created', (newGallery) => {
      setGalleries(prev => [...prev, newGallery]);
    });
    
    return () => {
      socket.off('gallery-created');

    };
  }, []);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
     socket.on('category-created', (newCategory) => {
      setCategories(prev => [...prev, newCategory]);
    });
    socket.on('category-updated', (newGallery) => {
      setGalleries(prev => [...prev, newGallery]);
    });
    return () => {
      socket.off('category-created');
    };
  }, []);

  return (
    <>
      <div className="gallery p-5">

        <div className="gallery-list m-5">
          <ul className="flex items-center justify-center gap-20 cursor-pointer roboto-regular-400 text-[#404A3D]">
            <li
              className={`flex items-center justify-center h-15 w-30 rounded-full text-white ${selectedCategory === "All"
                ? "bg-[#404A3D]"
                : "bg-gray-300 text-black"
                }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </li>

            {categories.filter((category) => !category.isDeleted).map((category, index) => (
              <li
                key={index}
                className={`flex items-center justify-center h-15 w-30 rounded-full cursor-pointer `}
                onClick={() => setSelectedCategory(category._id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-evenly flex-wrap gap-4">
          {galleries
            .filter((gallery) =>
              selectedCategory === "All"
                ? true
                : gallery.category === selectedCategory
            )
            .map((gallery, index) => (
              <div className="gallery-card" key={index}>
                <img
                  src={gallery.image.url}
                  alt={gallery.title}
                  className="gallery-card-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <h3>{gallery.title}</h3>
                  <p>"{gallery.description}"</p>
                </div>
              </div>
            ))}
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
