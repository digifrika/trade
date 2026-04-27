import { useState, useEffect } from 'react'

function useCountdown(initialHours = 12, initialMinutes = 34, initialSeconds = 57) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
          minutes = 59
          seconds = 59
        }
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num) => String(num).padStart(2, '0')

  return {
    hours: formatNumber(time.hours),
    minutes: formatNumber(time.minutes),
    seconds: formatNumber(time.seconds)
  }
}

export default useCountdown
