import { useState, useRef } from "react";

import Cards from "../../Components/Cards";

const Works = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const sliderRef = useRef(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();

    isDown = true;
    startX = e.clientX - rect.left;
    scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const walk = x - startX;

    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div className="bg-slate-600 w-full h-screen px-24  py-24">
        <div className="w-full h-full bg-blue-500 flex justify-between">
          <div>
            <h1 className="text-8xl font-bold text-cyan-400 mb-16"> Works</h1>
            <ul>
              <li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">
                1
              </li>
              <li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">
                2
              </li>
              <li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">
                3
              </li>
              <li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">
                4
              </li>
              <li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">
                5
              </li>
            </ul>
          </div>
          <article
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="unselectable no-scrollbar cursor-grabbing w-6xl h-[48rem] bg-gray-500 rounded-3xl grid grid-flow-col overflow-x-auto no-scrollbar grid-rows-2 gap-x-8 gap-y-2 p-6 basis-5xl"
          >
            {/* <Cards info={'Paraíbrass Portfólio'}/> */}
            {data.map((e) => {
              return <Cards info={e.toString()} />;
            })}
          </article>
        </div>
      </div>
    </>
  );
};

export default Works;
