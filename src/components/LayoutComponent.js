import React, { useEffect, useState } from 'react';

const LayoutComponent = () => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);


  useEffect(() => {

  }, []);
  return (
    <div>
      <h1>You are browsing on small device</h1>
    </div>
  )
}

export default LayoutComponent;
