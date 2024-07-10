export const formatDateToWIB = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Jakarta",
    hour12: false,
  };

  const formattedDate = new Date(dateString).toLocaleString("id-ID", options);
  return formattedDate.replace("pukul", ",").replace("WIB", "").trim() + " WIB";
};
