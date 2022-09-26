import { useEffect, useState } from "react";

const useClock = () => {
  // TODO
  // refer readme.md for what to return
  const [today, setDate] = useState<Date>(new Date());

  useEffect(() => { const time = setInterval(() => { setDate(new Date()); }, 1000) })

  let hours: number = today.getHours();
  let minutes: number = today.getMinutes();
  let seconds: number = today.getSeconds();
  return { hours, minutes, seconds }
};

export default useClock;
