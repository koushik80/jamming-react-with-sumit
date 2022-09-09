import React, { useEffect, useState } from 'react';

const LayoutComponentTwo = () => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);
  const checkScreenSize = () => {
    setOnSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className={}>
      <h1>You are browsing on { onSmallScreen ? 'small' : 'large' } device</h1>
    </div>
  );
}

export default LayoutComponentTwo;

