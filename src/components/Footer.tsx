import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-[1256px] justify-between items-center absolute -translate-x-2/4 h-[18px] left-2/4 bottom-[33px] max-md:w-[90%] max-md:flex-col max-md:gap-3 max-md:text-center max-md:px-6 max-md:py-0 max-sm:w-[95%] max-sm:px-4 max-sm:py-0 max-sm:bottom-5">
      <div className="text-white text-sm font-normal max-md:text-xs max-sm:text-[11px]">
        <p>Copyright © Genpact {currentYear}. All rights reserved.</p>
      </div>
      
      <div className="text-white text-sm font-normal max-md:text-xs max-sm:text-[11px]">
        <p>Developed &amp; maintained by AI Practice Team</p>
      </div>
    </footer>
  );
};

export default Footer;
