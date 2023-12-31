import { useEffect, useState } from 'react'
import { calculateDiff } from '../../helpers/caculateDiff'



const useTime = (futureTime: number, showDays: boolean = true, showHours: boolean = true) => {
  const { dd, hh, mm, ss } = calculateDiff(futureTime, showDays, showHours)
  const [days, setDays] = useState(dd)
  const [hours, setHours] = useState(hh)
  const [minutes, setMinutes] = useState(mm)
  const [seconds, setSeconds] = useState(ss)
  useEffect(() => {
    const interval = setInterval(() => {
      const { dd, hh, mm, ss } = calculateDiff(futureTime, showDays, showHours)
      showDays && setDays(dd);
      showHours && setHours(hh);
      setMinutes(mm);
      setSeconds(ss);
    }, 1000)
    return () => clearInterval(interval)
  }, [futureTime, showDays, showHours])
  return { days, hours, minutes, seconds }
}

export default useTime