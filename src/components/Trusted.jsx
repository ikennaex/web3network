import React from "react";

const Trusted = () => {
  const logos = [
    { name: "Prismic", src: "/images/logos/item-1.png" },
    { name: "Jotform", src: "/images/logos/item-2.png" },
    { name: "Voiceflow", src: "/images/logos/item-3.png" },
    { name: "Dropbox", src: "/images/logos/item-4.png" },
    { name: "GitLab", src: "/images/logos/item-5.png" },
    { name: "Krisp", src: "/images/logos/item-6.png" },
    { name: "Lattice", src: "/images/logos/item-7.png" },
    { name: "Monday", src: "/images/logos/item-8.png" },
    { name: "Figma", src: "/images/logos/item-9.png" },
    { name: "Stripe", src: "/images/logos/item-10.png" }
  ];

  return (
    <section className="bg-[#020617] py-24 overflow-hidden relative">

      {/* Glow background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10 px-6">

        <h2 className="text-2xl lg:text-3xl md:text-4xl font-semibold text-white mb-16">
          Trusted by
        </h2>

        {/* Logo Slider */}
        <div className="relative">

          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Animation */}
      <style>
        {`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}
      </style>

    </section>
  );
};

export default Trusted;