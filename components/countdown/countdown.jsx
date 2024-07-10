"use client";
import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-white flex items-center gap-x-4">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-lg font-bold">Days</h1>
        <div className="border-t-2 border-l-2 border-4 border-primary p-4 rounded-xl font-bold text-xl">
          {timeLeft.days}
        </div>
      </div>
      <span>:</span>
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-lg font-bold">Hours</h1>
        <div className="border-t-2 border-l-2 border-4 border-primary p-4 rounded-xl font-bold text-xl">
          {timeLeft.hours}
        </div>
      </div>
      <span>:</span>
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-lg font-bold">Minutes</h1>
        <div className="border-t-2 border-l-2 border-4 border-primary p-4 rounded-xl font-bold text-xl">
          {timeLeft.minutes}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
