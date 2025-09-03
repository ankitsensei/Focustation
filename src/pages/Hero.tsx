import Tasks from "../comps/Tasks"
import Stats from "../comps/Stats"

import Wall from "../assets/walls/cat-lofi-wall.jpg"
import DayGraph from "../comps/DayGraph"
import WeekGraph from "../comps/WeekGraph"
import AllTimeGraph from "../comps/AllTimeGraph"

const Hero = () => {

  return (
    <div
      className='flex flex-col pt-20 items-center w-full h-screen bg-cover bg-fixed  text-white'
      style={{ backgroundImage: `url(${Wall})` }}
    >
      <h1 className='font-semibold text-6xl mb-8'>Focustation</h1>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
        <Tasks />
      </div>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
        <Stats />
      </div>
      <div>
        <div className="flex gap-2">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
            <DayGraph />
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
            <WeekGraph />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
          <AllTimeGraph />
        </div>
      </div>
    </div>
  )
}

export default Hero
