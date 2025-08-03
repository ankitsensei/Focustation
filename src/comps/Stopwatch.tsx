import { useState, useEffect, useRef } from 'react';

import Btn from "./Btn"


const Stopwatch = () => {

  const [time, setTime] = useState<number>(0); // time in miliseconds
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [hasStartedOnce, setHasStartedOnce] = useState<boolean>(false);
  const [hasStopped, setHasStopped] = useState<boolean>(false);
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

  // Format time [HH:MM:SS:MS]
  const formatTime = () => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const miliSeconds = Math.floor((time % 1000) / 100);

    return (
      [
        hours, minutes, seconds, miliSeconds
      ]
    );
  }

  return (
    <div className="flex flex-col justify-center items-center border-2 border-zinc-600 rounded-xl p-5 w-[600px]">
      <div className="flex justify-center items-end text-8xl font-bold">
        <h1 className="[font-variant-numeric:tabular-nums]">{`${String(formatTime()[0]).padStart(2, '0')}`}:</h1>
        <h1 className="[font-variant-numeric:tabular-nums]">{`${String(formatTime()[1]).padStart(2, '0')}`}:</h1>
        <h1 className="[font-variant-numeric:tabular-nums]">{`${String(formatTime()[2]).padStart(2, '0')}`}.</h1>
        <h2 className='text-5xl text-rose-500 [font-variant-numeric:tabular-nums]'>{formatTime()[3]}</h2>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <Btn
          title="Start"
          className="text-green-600 border-2 border-green-600"
          onClick={() => { setIsRunning(true); setHasStartedOnce(true); setHasStopped(false) }}
        />
        {
          hasStartedOnce && <div>
            <Btn
              title="Stop"
              className='text-red-500 border-2 border-red-500'
              onClick={() => { setIsRunning(false); setHasStopped(true); setHasStartedOnce(false) }}
            />
          </div>
        }
        {
          hasStopped &&
          <Btn
            title="Reset"
            className='text-yellow-500 border-2 border-yellow-500'
            onClick={() => { setTime(0); setIsRunning(false); }}
          />
        }
      </div>
    </div>
  )
}

export default Stopwatch