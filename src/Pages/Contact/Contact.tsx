const Contact = () => {

    return (
        <>
        <main className="bg-second-page w-full h-96 py-24 px-24">
            <h1 className="font-secondary text-center text-6xl text-white font-bold">Contact</h1>
            <h6 className="font-primary font-thin text-colored-text text-3xl text-center my-10">If you are interest in any kind of job that I did, feel free to contact me.</h6>
            <div className="flex justify-around ">
                <span className="font-thin font-primary text-white cursor-pointer text-4xl "><a href="https://instagram.com/_emanuel_sg">@_emanuel_sg</a></span>
                <span className="font-thin font-primary text-white cursor-pointer text-4xl "><a href="mailto:fxemanuel@gmail.com">fxemanuel@gmail.com</a></span>
                <span className="font-thin font-primary text-white cursor-pointer text-4xl ">+55 83 99678-9315</span>
            </div>
        </main>
        
        </>
    )
}


export default Contact