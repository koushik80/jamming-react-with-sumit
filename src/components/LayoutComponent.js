import React, { useEffect, useState } from 'react';

const LayoutComponent = () => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);
  const checkScreenSize = () => {
    setOnSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }, []);
  return (
    <div>
      <h1>You are browsing on small device</h1>
    </div>
  )
}

export default LayoutComponent;
