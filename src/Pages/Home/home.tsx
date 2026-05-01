
const Home = () => {
    return (
        <>
        <div className="w-full bg-primary-color h-screen text-white px-24">
            <nav className='w-full h-12 flex items-center justify-between  pt-8 px-14 text-lg'>
                <ul className=''>
                <li className='cursor-pointer'><a href='#' className='hover:text-amber-400 transition-colors'>Home</a></li>
                </ul>
                <ul className='flex justify-between w-64'>
                <li><a className="hover:text-amber-400 transition-colors" href='#'>About</a></li>
                <li><a className="hover:text-amber-400 transition-colors" href='#'>Works</a></li>
                <li><a className="hover:text-amber-400 transition-colors" href='#'>Contact</a></li>
                </ul>
            </nav>
            <article className='w-6xl bg-yellow-500 h-[32rem] mx-auto mt-24 flex justify-between'>
                <div className='w-[34rem] h-full bg-red-500'>
                    <text className='w-full h-full justify-center flex-row'>
                        <h1 className='text-sky-400 font-bold font-secondary font text-5xl mt-18 bg-gray-200'>Hello <span className='text-white'>,</span> <span className='text-amber-300'>I'm Emanuel</span></h1>
                        <p className='text-xl mt-1 bg-blue-200'>Scroll down to see what I've done.</p>
                    </text>
                </div>
            </article>
        </div>
        </>
    )
}







export default Home