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
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    setHasMounted(true);
  }, [targetDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted) {
    return null; // Render nothing on the server side
  }

  return (
    <div className="text-white flex items-center md:gap-x-4 gap-x-2">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-base font-bold">Days</h1>
        <div className="border-t-2 border-l-2 border-4 border-primary p-4 rounded-xl font-bold w-full flex justify-center">
          <p className="md:text-xl text-base">{timeLeft.days}</p>
        </div>
      </div>
      <div className="text-xl font-bold mt-6">:</div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-base font-bold">Hours</h1>
        <div className="border-t-2 border-l-2 border-4 border-primary p-4 rounded-xl font-bold w-full flex justify-center">
          <p className="md:text-xl text-base">{timeLeft.hours}</p>
        </div>
      </div>
      <div className="text-xl font-bold mt-6">:</div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-base font-bold">Minutes</h1>
        <div className="border-t-2 border-l-2 border-4 border-primary p-4 rounded-xl font-bold w-full flex justify-center">
          <p className="md:text-xl text-base">{timeLeft.minutes}</p>
        </div>
      </div>
      <div className="text-xl font-bold mt-6">:</div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-base font-bold">Seconds</h1>
        <div className="border-t-2 border-l-2 border-4 border-primary p-4 rounded-xl font-bold w-full flex justify-center">
          <p className="md:text-xl text-base">{timeLeft.seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
