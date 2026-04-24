import { useState } from "react"

import Cards from "../../Components/Cards"

const Works = () => {

    let scrollLeft;

    const [startX, setStartX] = useState(0)

    const [isDown, setIsDown] = useState(false)

    const [state, setState] = useState(0)

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
     
    const apertei = (e:MouseEvent) => {
        setIsDown(true)
        
        console.log('apertei')
    }

    // console.log(isDown + ' mudei agora')

    const soltei = (e:MouseEvent) => {
        setIsDown(false)
        
        console.log('soltei')
    }

    const moving = (e:MouseEvent) => {
        if (isDown != true) {
            return
        } else {
            setState(e.clientX)
            let scrollWidth = e.target.scrollWidth 
            let startX = scrollWidth - e.target.getBoundingClientRect().x
            
            console.log(startX - e.clientX)
            e.target.scrollLeft = state
            console.log('posso mover')
        }
    }

    

    


    return (
    <>
    <div className="bg-slate-600 w-full h-screen px-24  py-24">
        <div className="w-full h-full bg-blue-500 flex justify-between">
            <div>
                <h1 className="text-8xl font-bold text-cyan-400 mb-16"> Works</h1>
                <ul>
                    <li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">1</li>
                    <li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">2</li>
                    <li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">3</li>
                    <li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">4</li>
                    <li className="duration-300 text-medium text-white text-5xl hover:text-amber-300 cursor-pointer">5</li>
                </ul>
            </div>
            <article onMouseMove={(e) => moving(e)} onMouseDown={(e) => apertei(e)} onMouseUp={(e) => soltei(e)} className="unselectable  cursor-grabbing w-6xl h-[48rem] bg-gray-500 rounded-3xl grid grid-flow-col overflow-x-auto no-scrollbar grid-rows-2 gap-x-8 gap-y-2 p-6 basis-5xl">
                {/* <Cards info={'Paraíbrass Portfólio'}/> */}
                {data.map((e) => {
                    
                    return ( <Cards info={e.toString()}/>)
                })}
            </article>
        </div>
    </div>
    </>)
}

export default Works