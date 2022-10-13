const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const sliceIntoChunks = (arr: Array<any>, chunkSize: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

export const parseDate = (date: string) => {
  const d = new Date(date);
  const month = d.getMonth();
  const day = d.getDate();
  const year = d.getFullYear();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const min = String(minutes).padStart(2, "0");
  let strTime = hours + ":" + min + " " + ampm;

  return months[month] + " " + day + ", " + year + " " + strTime;
};
