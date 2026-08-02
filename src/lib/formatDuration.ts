/** Human tenure between two dates, e.g. "3 months", "1 year", "4 years 2 months". */
export function formatDuration(startIso: string, end: Date = new Date()): string {
  const start = new Date(startIso);
  if (Number.isNaN(start.getTime())) {
    throw new Error(`Invalid start date: ${startIso}`);
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (end.getDate() < start.getDate()) {
    months -= 1;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years < 0 || (years === 0 && months < 0)) {
    return '<1 month';
  }
  if (years === 0 && months === 0) {
    return '<1 month';
  }
  if (years === 0) {
    return months === 1 ? '1 month' : `${months} months`;
  }
  if (months === 0) {
    return years === 1 ? '1 year' : `${years} years`;
  }
  const y = years === 1 ? '1 year' : `${years} years`;
  const m = months === 1 ? '1 month' : `${months} months`;
  return `${y} ${m}`;
}
