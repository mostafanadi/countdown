export const calculateDiff = (futureTime: number, showDays: boolean = true, showHours: boolean = true) => {
  const nowUnix = Math.round(+new Date() / 1000);
  const distance = (futureTime - nowUnix) > 0 ? (futureTime - nowUnix) : 0
  const dd = Math.floor(distance / (60 * 60 * 24))
  const hh = Math.floor((distance % (60 * 60 * 24)) / (60 * 60))
  const mm = Math.floor((distance % (60 * 60)) / (60))
  const ss = Math.round((distance % (60)) / 1)


  const hours_noDays = Math.floor(distance / (1 * 60 * 60));
  const minutes_noDays = Math.floor((distance % (1 * 60 * 60)) / (1 * 60));
  const seconds_noDays = Math.floor((distance % (1 * 60)) / 1);
  const minutes_noHours = Math.floor(distance / (1 * 60));
  const seconds_noHours = Math.floor((distance % (1 * 60)) / 1);

  if (!showDays && showHours) {
    return {
      hh: hours_noDays, mm: minutes_noDays, ss: seconds_noDays
    }

  }
  if (!showHours) {
    return { mm: minutes_noHours, ss: seconds_noHours }
  }
  return { dd, hh, mm, ss }
}