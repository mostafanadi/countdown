export const calculateDiff = (futureTime: number) => {
  const nowUnix = Math.round(+new Date() / 1000);
  const distance = (futureTime - nowUnix) > 0 ? (futureTime - nowUnix) : 0
  const dd = Math.floor(distance / (60 * 60 * 24))
  const hh = Math.floor((distance % (60 * 60 * 24)) / (60 * 60))
  const mm = Math.floor((distance % (60 * 60)) / (60))
  const ss = Math.round((distance % (60)) / 1)
  return {
    dd, hh, mm, ss
  }
}