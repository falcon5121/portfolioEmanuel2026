import Navbar from "../../Components/Navbar"
import Img from "../../assets/Emanuel-bg.png"


const Home = () => {
    return (
        <>
        <div className="w-full bg-first-page h-screen text-white px-24">
            <Navbar/>
            <article className='w-6xl h-[32rem] mx-auto mt-24 flex justify-between'>
                <div className='w-[34rem] h-full'>
                    <text className='w-full h-full justify-center flex-row'>
                        <h1 className='text-highlight font-bold font-secondary font text-6xl mt-28'>Hello <span className='text-white'>,</span> <span className='text-amber-300 font-normal font-primary'>I'm Emanuel</span></h1>
                        <p className='text-2xl mt-1 font-secondary'>Scroll down to see what I've done.</p>
                    </text>
                </div>
                <img src={Img} />
            </article>
        </div>
        </>
    )
}







export default Home