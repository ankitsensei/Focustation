import { Routes, Route } from "react-router-dom";
import Stopwatch from "./comps/Stopwatch";

import Hero from "./pages/Hero"

const App = () => {
  return (
    <div className="w-full h-full">

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </div>
  )
}

export default App