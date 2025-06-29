'use client'
import { ThemeContext } from '@/contexts/ThemeProvider';
import React, { useContext } from 'react';
import { MdDarkMode, MdWbTwilight } from 'react-icons/md';

const ControlTheme = () => {
     const {theme,toggleTheme}= useContext(ThemeContext);
    return (
        <div>
            <button
        onClick={toggleTheme}
        className="p-2 rounded-full border mx-2"
      >
        {theme === 'light' ? <MdWbTwilight /> :<MdDarkMode />}
      </button> 
        </div>
    );
};

export default ControlTheme;