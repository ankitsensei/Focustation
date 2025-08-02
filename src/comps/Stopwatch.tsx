import { useState, useEffect, useRef } from 'react';

import Btn from "./Btn"


const Stopwatch = () => {

  const [time, setTime] = useState<number>(0); // time in miliseconds
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  // Start or stop timer
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increase every 10ms
      }, 10);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  // Format time [HH:MM:SS]
  const formatTime = () => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return (
      `${String(hours).padStart(2, '0')}:` +
      `${String(minutes).padStart(2, '0')}:` +
      `${String(seconds).padStart(2, '0')}`
    )
  }

  return (
    <div className="flex flex-col justify-center items-center border-2 border-zinc-600 rounded-xl p-5 w-[500px]">
      <h1 className="text-8xl font-bold">{formatTime()}</h1>
      <div className="flex gap-2 justify-center items-center">
        <Btn title="Start" onClick={() => setIsRunning(true)} />
        <Btn title="Stop" onClick={() => setIsRunning(false)} />
        <Btn title="Reset" onClick={() => { setTime(0); setIsRunning(false); }} />
      </div>
    </div>
  )
}

export default Stopwatch