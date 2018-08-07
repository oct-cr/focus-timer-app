export const getFormattedTime = seconds => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  const paddedMinutes = `0${minutes}`.substr(-2)
  const paddedSeconds = `0${remainingSeconds}`.substr(-2)

  return `${paddedMinutes}:${paddedSeconds}`
}
