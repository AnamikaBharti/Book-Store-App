import React from "react";
import bannerImg from  "../../assets/banner.png"

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end  ">
            <img src={bannerImg} alt="" />
        </div>
        <div className="md:w-1/2 w-full  ">
          <h1 className="md:text-4xl text-2xl font-medium mb-7">
            New Release This Week
          </h1>
          <p className="mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            dolor, et nam iusto expedita, architecto consequatur recusandae
            libero veritatis perspiciatis eius laboriosam. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Molestiae 
          </p>
          <button className="bg-amber-300 px-12 py-2 rounded-md text-base font-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer">Subscribe</button>
        </div>
       
      </div>
    </>
  );
};

export default Banner;
