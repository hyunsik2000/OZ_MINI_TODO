import { useEffect, useState } from "react";
import "../style/time.css";

export default function NowTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock-date">
        {time.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "short",
        })}
      </div>
      <div className="clock-time">
        {time.toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </div>
    </div>
  );
}
