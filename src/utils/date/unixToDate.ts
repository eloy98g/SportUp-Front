const unixToDate = (unix: number): string => {
  const dateObject = new Date(unix * 1000);

  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(dateObject);

  return formattedDate;
};

export default unixToDate;
