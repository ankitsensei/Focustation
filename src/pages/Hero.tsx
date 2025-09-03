import Tasks from "../comps/Tasks"

import Wall from "../assets/walls/cat-lofi-wall.jpg"
import DayGraph from "../comps/DayGraph"
import WeekGraph from "../comps/WeekGraph"
import AllTimeGraph from "../comps/AllTimeGraph"

const Hero = () => {

  return (
    <div
      className='flex flex-col pt-20 items-center w-full min-h-screen bg-cover bg-fixed  text-white hide-scrollbar'
      style={{ backgroundImage: `url(${Wall})` }}
    >
      <h1 className='font-semibold text-6xl mb-8'>Focustation</h1>

      <div className="flex flex-col justify-center items-center gap-3">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
          <Tasks />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 items-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
            <DayGraph />
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
            <WeekGraph />
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
            <AllTimeGraph />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
