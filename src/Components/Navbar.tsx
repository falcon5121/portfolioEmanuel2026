 const Navbar = () => {

    return (
        <nav className='w-full h-12 flex items-center justify-between  pt-8 px-14 text-2xl font-primary'>
                <ul className=''>
                <li className='cursor-pointer'><a href='#' className='py-2.5 px-5 rounded-xl hover:text-highlight hover:bg-bg-hover hover:drop-shadow-backlight transition-colors'>Home</a></li>
                </ul>
                <ul className='flex justify-between w-64'>
                <li><a className="hover:text-highlight hover:bg-bg-hover hover:drop-shadow-backlight py-2.5 px-5 rounded-xl transition-colors" href='#'>About</a></li>
                <li><a className="hover:text-highlight hover:bg-bg-hover hover:drop-shadow-backlight py-2.5 px-5 rounded-xl transition-colors" href='#'>Works</a></li>
                <li><a className="hover:text-highlight hover:bg-bg-hover hover:drop-shadow-backlight py-2.5 px-5 rounded-xl transition-colors" href='#'>Contact</a></li>
                </ul>
            </nav>
    )
 }

 export default Navbar