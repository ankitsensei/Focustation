import Stopwatch from "../comps/Stopwatch"
import Wall from "../assets/walls/wall.jpg"

const Hero = () => {
  return (
    <div className='flex flex-col pt-20 items-center  w-full h-screen bg-cover text-white' style={{backgroundImage: `url(${Wall})`}}>
        <h1 className='font-semibold text-6xl'>Focustation</h1>
        <Stopwatch />
    </div>
  )
}

export default Hero