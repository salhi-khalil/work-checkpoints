import React, { useState, useEffect } from 'react';

const Interval = () => {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec(sec => sec + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <p className="int">
        {sec} seconds have elapsed since mounting.
      </p>
  );
};

export default Interval;