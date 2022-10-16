const Hero = () => {
    return (
        <div className="h-screen w-full bg-red-400 flex justify-center items-center -mt-16 relative overflow-hidden">
            <video className="absolute  w-full h-full object-cover" src="/videos/temp.mp4" autoPlay muted loop>

            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

            <div className="absolute bottom-0 left-0  hidden xl:flex">
                <div className="bg-blue-300 w-56 h-16"></div>
                <div className="w-10 h-16 triangle-left bg-blue-300"></div>
            </div>

            <div className="absolute bottom-0 right-0  hidden xl:flex">
                <div className="w-10 h-16 triangle-right bg-blue-300"></div>
                <div className=" bg-blue-300 w-56 h-16"></div>
            </div>


            <div className="text-center relative text-white mx-4">
                <p className="sub-title">Lorem ipsum dolar set</p>
                <h1 className="main-title">Cyber Persia</h1>
                <h2 className="desc-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h2>
            </div>
        </div>
    )
}

export default Hero
