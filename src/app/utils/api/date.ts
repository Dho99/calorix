export function formatDate(date: string | Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("id-ID", options);
}

export function getStringDateName(date: string | Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("id-ID", options);
}

export function getDateAndMonthOnly(date: string | Date){
  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
  };
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("id-ID", options);
};

export function getMonthName(date: string | Date){
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
  };
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", options);
}