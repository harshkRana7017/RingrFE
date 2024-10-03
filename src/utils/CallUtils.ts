export function calculateCallDuration(startTime: Date, endTime: Date): string {
  const start = new Date(startTime).getTime();
  const end = new Date(endTime).getTime();

  const durationMs = end - start; // Duration in milliseconds

  // Convert to hours, minutes, and seconds
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((durationMs % (1000 * 60)) / 1000);

  // Return formatted string
  if (hours > 0) {
    return `${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)`;
  } else if (minutes > 0) {
    return `${minutes} minute(s) ${seconds} second(s)`;
  } else {
    return `${seconds} second(s)`;
  }
}
