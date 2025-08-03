import Tasks from "../comps/Tasks"
import Stopwatch from "../comps/Stopwatch"

import Wall from "../assets/walls/work-lofi-wall.jpg"

const Hero = () => {
  return (
    <div
      className='flex flex-col pt-20 items-center w-full h-screen bg-cover text-white'
      style={{ backgroundImage: `url(${Wall})` }}
    >
      <h1 className='font-semibold text-6xl mb-8'>Focustation</h1>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
        <Tasks />
      </div>

      {/* Glass Effect Container */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
        {/* <Stopwatch /> */}
      </div>

    </div>
  )
}

export default Hero
