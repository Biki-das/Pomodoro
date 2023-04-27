export function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = (timeInSeconds % 60).toFixed();
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export function formatInMinute(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  return `${minutes.toString()}`;
}
