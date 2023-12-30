/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from 'react'
import useTime from '../../hooks/useTime'
import Circle from '../circle'
import { sizeEnum, type CountDownProps } from './../../../types.ts'


function CountDown({ size = "normal", className, variant = "primary", expiryTimeStamp, autoStart = true, onExpire, showTitle, showDays = true, showHours = true }: CountDownProps) {
  const [_autoStart, _setAutoStart] = useState(autoStart)
  const { days, hours, minutes, seconds } = useTime(expiryTimeStamp)
  useEffect(() => {
    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0)
      onExpire()
  }, [days, hours, minutes, seconds])
  const perimeter = 2 * Math.PI * sizeEnum[size]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {showTitle && <div style={{ color: 'white' }}>{showTitle}</div>}
      <div id='time' >
        {/* DAY */}
        {showDays && <Circle size={size}
          strokeDashoffset={_autoStart ? (perimeter - (perimeter * days) / 365) : perimeter}
          title='Days'
          value={_autoStart ? days : 0} />}
        {/* HOUR */}
        {showHours && <Circle size={size}
          strokeDashoffset={_autoStart ? (perimeter - (perimeter * hours) / 24) : perimeter}
          title='Hours'
          value={_autoStart ? hours : 0} />}
        {/* MINUTES */}
        <Circle size={size}
          strokeDashoffset={_autoStart ? (perimeter - (perimeter * minutes) / 60) : perimeter}
          title='Minutes'
          value={_autoStart ? minutes : 0} />
        {/* SECONDS */}
        <Circle size={size}
          strokeDashoffset={_autoStart ? (perimeter - (perimeter * seconds) / 60) : perimeter}
          title='Seconds'
          value={_autoStart ? seconds : 0} />

      </div>
      {
        !_autoStart &&
        <button style={{ margin: 'auto' }} onClick={() => _setAutoStart(true)}>START !</button>
      }
    </div>
  )
}

export default CountDown
