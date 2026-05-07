import { useEffect, useRef, useState } from "react";
import { getWorks } from "../../services/works";
import { getJobs } from "../../services/jobs";

import Cards from "../../Components/Cards";

interface cardsData {
  id: number,
  title: string,
  description: string,
  img: string,
}

interface dataJobs {
  id: number,
  title: string
}


const Works = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [jobs, setJobs] = useState([])
  const [works, setWorks] = useState([])

  getJobs().then(e => setJobs(e))
  getWorks().then(e => setWorks(e))

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
      <div className="bg-first-page w-full h-screen px-24  py-24">
        <div className="w-full h-full flex justify-between ">
          <div>
            <h1 className="text-8xl font-bold text-highlight mb-16"> Works</h1>
            <ul className="flex flex-col gap-12 pl-12">
              {jobs.map((e:dataJobs) => {
return (<li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">
                {e.title}
              </li>)
              })}
            </ul>
          </div>
          <article
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="unselectable mt-22 bg-carousel-bg no-scrollbar cursor-grabbing w-6xl h-[48rem] rounded-4xl grid grid-flow-col overflow-x-auto no-scrollbar grid-rows-2 gap-x-8 gap-y-2 p-6 basis-5xl"
          >
            {works.map((e) => {return <Cards props={e} />;})}
          </article>
        </div>
      </div>
    </>
  );
};

export default Works;