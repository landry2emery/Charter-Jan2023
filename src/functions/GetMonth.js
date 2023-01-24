export const GetMonth = (date) => {
  const month = new Date(date).toLocaleString("en", { month: "short" });
  return month;
};
