import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserIconClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="w-full h-[82px] relative z-10 max-md:h-[70px] max-sm:h-[60px]">
      <div className="w-full h-[82px] absolute bg-[#252525] left-0 top-0 max-md:h-[70px] max-sm:h-[60px]" />
      
      <nav className="relative h-full flex items-center justify-between px-4 md:px-6 lg:px-[95px]">
        <div className="w-[199px] h-[72px] max-md:w-40 max-md:h-12 max-sm:w-[120px] max-sm:h-11">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7501eb5e0391ab0bb1caa93d2e8251521d162907?width=398"
            alt="ON_IT horizontal white logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative">
          <button
            onClick={handleUserIconClick}
            className="w-11 h-11 relative focus:outline-none focus:ring-2 focus:ring-[#FFAD28] focus:ring-offset-2 focus:ring-offset-[#252525] rounded-full transition-transform hover:scale-105"
            aria-label="User profile menu"
            aria-expanded={isUserMenuOpen}
            aria-haspopup="true"
          >
            <div className="absolute inset-0">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle cx="22" cy="22" r="22" fill="#FFAD28" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M9.0001 7.19999C9.0001 5.54249 10.3426 4.19999 12.0001 4.19999C13.6576 4.19999 15.0001 5.54249 15.0001 7.19999C15.0001 8.85749 13.6576 10.2 12.0001 10.2C10.3426 10.2 9.0001 8.85749 9.0001 7.19999ZM16.8001 7.19999C16.8001 4.54874 14.6513 2.39999 12.0001 2.39999C9.34885 2.39999 7.2001 4.54874 7.2001 7.19999C7.2001 9.85124 9.34885 12 12.0001 12C14.6513 12 16.8001 9.85124 16.8001 7.19999ZM5.4001 20.4C5.4001 17.7487 7.54885 15.6 10.2001 15.6H13.8001C16.4513 15.6 18.6001 17.7487 18.6001 20.4V20.7C18.6001 21.1987 19.0013 21.6 19.5001 21.6C19.9988 21.6 20.4001 21.1987 20.4001 20.7V20.4C20.4001 16.755 17.4451 13.8 13.8001 13.8H10.2001C6.5551 13.8 3.6001 16.755 3.6001 20.4V20.7C3.6001 21.1987 4.00135 21.6 4.5001 21.6C4.99885 21.6 5.4001 21.1987 5.4001 20.7V20.4Z"
                  fill="black"
                />
              </svg>
            </div>
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                Settings
              </button>
              <hr className="my-1 border-gray-200" />
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
