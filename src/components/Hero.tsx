import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isExploring, setIsExploring] = useState(false);

  const handleExploreClick = () => {
    setIsExploring(true);
    // Simulate navigation or action
    setTimeout(() => {
      setIsExploring(false);
      // Here you could navigate to another page or show content
      console.log('Exploring the intelligent architecture journey...');
    }, 1000);
  };

  return (
    <main className="absolute -translate-x-2/4 -translate-y-2/4 text-center z-10 left-2/4 top-2/4">
      <section className="space-y-6 max-sm:space-y-4">
        <h1 className="text-white text-center text-3xl font-bold leading-[43px] w-[593px] max-md:text-[28px] max-md:leading-9 max-md:w-[90%] max-md:max-w-[500px] max-sm:text-2xl max-sm:leading-8 max-sm:w-[95%]">
          Welcome to
          <br />
          End-to-End Intelligent Architecture Journey
        </h1>

        <p className="text-gray-200 text-lg font-normal leading-7 text-center mb-[61px] max-md:text-base max-md:leading-6 max-md:mb-10 max-sm:text-sm max-sm:leading-5 max-sm:w-[90%] max-sm:mb-8">
          From Strategic Vision to Production Success
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleExploreClick}
            disabled={isExploring}
            className="flex w-[154px] justify-center items-center h-12 bg-[#FFAD28] px-6 py-3 rounded-lg transition-all duration-200 hover:bg-[#FF9A0A] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFAD28] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-70 disabled:cursor-not-allowed max-md:w-[140px] max-md:px-5 max-md:py-2.5 max-sm:w-[120px] max-sm:h-10 max-sm:px-4 max-sm:py-2"
            aria-label="Explore the intelligent architecture journey"
          >
            <span className="text-gray-950 text-center text-base font-medium leading-6 max-sm:text-sm">
              {isExploring ? 'Loading...' : 'Explore'}
            </span>
            
            {!isExploring && (
              <div className="flex w-7 h-5 flex-col items-start shrink-0 pl-2">
                <div className="flex w-5 h-5 flex-col justify-center items-start shrink-0">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M8 15L13 10L8 5"
                      stroke="#030712"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
