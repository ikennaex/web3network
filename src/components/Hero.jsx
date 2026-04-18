import React, { useState } from "react";
import { Link } from "react-router";

const Hero = () => {
  // 1. State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-[#020617] text-white min-h-screen flex flex-col justify-center items-center px-6 md:px-10 overflow-hidden">
      {/* Background and Decorative Elements (Keep as is) */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[200px] md:h-[350px] bg-[#725B0B] rounded-full blur-[80px] md:blur-[80px] pointer-events-none hidden md:flex"></div>
      <div className="absolute top-[30%] right-[15%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/10 rounded-full blur-[70px] md:blur-[100px] pointer-events-none"></div>

      <img
        src="/images/bitcoin.png"
        alt="Bitcoin"
        className="spinning-globe hidden lg:flex absolute top-[15%] md:top-[42%] left-[3%] w-16 md:w-28 opacity-80 transition-all duration-1000"
      />
      <img
        src="/images/globe.png"
        alt="Planet"
        className="absolute top-[8%] right-[2%] w-16 md:w-28 spinning-globe drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]"
      />
      <img
        src="/images/coin-1.png"
        alt="Silver Coin"
        className="absolute bottom-[20%] right-[5%] w-12 md:w-20 opacity-70 spinning-globe transition-all duration-1000"
      />
      <img
        src="/images/rocket.png"
        alt="Rocket"
        className="absolute bottom-[2%] md:bottom-[2%] left-[-5%] md:left-[-3%] w-24 md:w-40 grayscale-[0.5] rotate-[-2deg] hidden md:block"
      />

      {/* Main Content Container */}
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10 pt-20 md:pt-10">
        {/* Left Section (Hero Text & Buttons) */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.2] md:leading-[1.15]">
            Gateway to <span className="text-[#38bdf8]">Encrypt</span>,
            <br className="hidden md:block" />
            back up, and secure
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-[#fbbf24]">your assets</span>
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#fbbf24] "></span>
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-[400px] mx-auto lg:mx-0 leading-relaxed">
            The easiest, safest, and fastest way to secure & back up crypto
            assets.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-6 justify-center lg:justify-start">
            {/* 3. Attach openModal to button clicks */}
            <button
              onClick={openModal}
              className="relative bg-[#3b82f6] text-white text-base md:text-lg font-bold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all ring-2 ring-[#3b82f6] ring-offset-4 ring-offset-[#020617] hover:scale-105"
            >
              Connect Wallet
            </button>

            <button
              onClick={openModal}
              className="relative bg-[#0f172a] text-white text-base md:text-lg font-bold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all ring-2 ring-[#3b82f6] ring-offset-4 ring-offset-[#020617] hover:bg-[#1e293b] hover:scale-105"
            >
              Explore Now
            </button>
          </div>
        </div>

        {/* Right Section (Hero Image) */}
        <div className="relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1B4576] blur-[60px] md:blur-[80px] rounded-full"></div>
          <img
            src="/images/Web3.png"
            alt="Web evolution"
            className="relative z-10 w-full max-w-[350px] md:max-w-[550px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Stats Section (Keep as is) */}
      <div className="w-full max-w-7xl mt-16 md:mt-24 mb-10 z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 border-t border-white/5 pt-12">
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-4xl font-bold">200+</p>

            <p className="text-gray-500 text-[10px] md:text-sm mt-1 uppercase tracking-wider text-center">
              Countries Covered
            </p>
          </div>

          <div className="flex flex-col items-center border-l border-white/10">
            <p className="text-2xl md:text-4xl font-bold">30M+</p>

            <p className="text-gray-500 text-[10px] md:text-sm mt-1 uppercase tracking-wider text-center">
              Global Investors
            </p>
          </div>

          <div className="flex flex-col items-center border-l border-white/10">
            <p className="text-2xl md:text-4xl font-bold">700+</p>

            <p className="text-gray-500 text-[10px] md:text-sm mt-1 uppercase tracking-wider text-center">
              Secured Wallet
            </p>
          </div>

          <div className="flex flex-col items-center border-l border-white/10">
            <p className="text-2xl md:text-4xl font-bold">$1.3B+</p>

            <p className="text-gray-500 text-[10px] md:text-sm mt-1 uppercase tracking-wider text-center">
              Secured Volume
            </p>
          </div>
        </div>
      </div>

      {/* 4. Modal Implementation */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/60 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="bg-[#09131D] w-full max-w-[420px] rounded-lg p-4 relative border border-white/5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 bg-[#1E293B]/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-[#1E293B]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 13L13 1M1 1L13 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-1">
                Connect Wallet
              </h2>
              <p className="text-gray-400 text-sm">Gateway to Web3</p>
            </div>

            {/* Tabs */}
            <div className="relative mb-8">
              <div className="flex gap-8 border-b border-white/5">
                <button className="pb-3 text-lg font-bold text-white relative">
                  Backup Wallet
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fbbf24]"></div>
                </button>
              </div>
            </div>

            {/* Selection Card */}
            <div className="bg-[#111827]/50 border border-white/5 rounded-[24px] p-6 mb-2">
              <div className="flex items-center gap-4 mb-8">
                {/* Bitcoin/Target Icon */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  {/* <div className="absolute inset-0 border-2 border-[#3b82f6] rounded-full"></div> */}
                  {/* <div className="absolute inset-2 border-2 border-[#3b82f6]/30 rounded-full"></div> */}
                  <img
                    src="/images/btcicon.png"
                    alt=""
                    className="w-12 h-12 z-10"
                  />
                </div>
                <h4 className="text-base font-bold text-white">
                  Automatic/Manual backup
                </h4>
              </div>

              <Link to={"/connect/secure"}>
                <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-2 px-4 rounded-full transition-all text-base">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
