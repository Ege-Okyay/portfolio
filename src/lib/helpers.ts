export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInTurkey(): Date {
  const now = new Date();

  const offsetTurkey = 3;
  now.setHours(now.getUTCHours() + offsetTurkey);

  return now;
}

export function formatTimeForTurkey(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Europe/Istanbul",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
