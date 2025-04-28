export function formatDate(date: string | Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("id-ID", options);
}