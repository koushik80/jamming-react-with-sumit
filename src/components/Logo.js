import { useState } from 'react';

const Logo = () => {
    // eslint-disable-next-line no-unused-vars
    const [glassColor, setGlassColor] = useState('black');

    return (
        <div className="logo">
            <div className="hair">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153.16 126.87"></svg>
            </div>
            <div className="glasses">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.63 42.68"></svg>
            </div>
            <div className="play">
                <button type="button">Colorize Glass</button>
                <button type="button">Reset Glass</button>
            </div>
        </div>
    );
}

export default Logo;