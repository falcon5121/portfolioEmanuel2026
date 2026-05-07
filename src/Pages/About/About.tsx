import Img2 from '../../assets/Emanuel 2.png'

const About = () => {
    return (
        <>
        <main className="bg-second-page h-screen w-full flex justify-center px-24 items-center">
            <div className="w-7xl h-[48rem] flex justify-between">
                <img src={Img2} className=''/>
                <div className=" w-[44rem]">
                    <h1 className="text-highlight text-8xl font-bold mb-20">About me</h1>
                    <p className="text-white font-primary font-normal text-justify text-5xl tracking-wider">I'm a trumpet player, musician enthusiast in a lot of different stuffs hobbies. Today I can edit some videos, take photos, create websites and small applications, create some design and a lot of others stuff. If you want to see some works that I did, scroll down a bit. See you there.</p>
                </div>
            </div>
        </main>
        </>
    )
}

export default About