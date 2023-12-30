import { useEffect, useState } from 'react'
import { calculateDiff } from '../../helpers/caculateDiff'



const useTime = (futureTime: number) => {
  const { dd, hh, mm, ss } = calculateDiff(futureTime)
  const [days, setDays] = useState(dd)
  const [hours, setHours] = useState(hh)
  const [minutes, setMinutes] = useState(mm)
  const [seconds, setSeconds] = useState(ss)
  useEffect(() => {
    const interval = setInterval(() => {
      const { dd, hh, mm, ss } = calculateDiff(futureTime)
      setDays(dd);
      setHours(hh);
      setMinutes(mm);
      setSeconds(ss);
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return { days, hours, minutes, seconds }
}

export default useTime