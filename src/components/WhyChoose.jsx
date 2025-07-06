import Image from 'next/image';

const features = [
  {
    icon: (
      // Network/management icon (placeholder SVG)
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="19" stroke="#F6B940" strokeWidth="2" fill="#fff" />
        <g stroke="#F6B940" strokeWidth="2">
          <circle cx="20" cy="20" r="6" />
          <circle cx="20" cy="8" r="2" />
          <circle cx="32" cy="20" r="2" />
          <circle cx="8" cy="20" r="2" />
          <circle cx="20" cy="32" r="2" />
          <line x1="20" y1="14" x2="20" y2="10" />
          <line x1="26" y1="20" x2="30" y2="20" />
          <line x1="14" y1="20" x2="10" y2="20" />
          <line x1="20" y1="26" x2="20" y2="30" />
        </g>
      </svg>
    ),
    text: 'Experienced Staff And Management.',
    gradient: 'from-[#F6B940]/90 to-[#fff0]/0',
    textColor: 'text-white',
  },
  {
    icon: (
      // Thumbs up/quote icon (placeholder SVG)
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="19" stroke="#F6A05B" strokeWidth="2" fill="#fff" />
        <g stroke="#F6A05B" strokeWidth="2">
          <rect x="10" y="22" width="20" height="6" rx="2" />
          <path d="M16 22v-6a4 4 0 0 1 4-4h4v10" />
          <circle cx="14" cy="28" r="1" />
          <circle cx="18" cy="28" r="1" />
          <circle cx="22" cy="28" r="1" />
        </g>
      </svg>
    ),
    text: 'Offering Clients Competitive Quotes .',
    gradient: 'from-[#F6A05B]/90 to-[#fff0]/0',
    textColor: 'text-white',
  },
  {
    icon: (
      // Clipboard/requirements icon (placeholder SVG)
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="19" stroke="#A97C50" strokeWidth="2" fill="#fff" />
        <g stroke="#A97C50" strokeWidth="2">
          <rect x="13" y="14" width="14" height="16" rx="2" />
          <rect x="16" y="10" width="8" height="4" rx="2" />
          <line x1="16" y1="18" x2="24" y2="18" />
          <line x1="16" y1="22" x2="24" y2="22" />
        </g>
      </svg>
    ),
    text: 'Fulfilling Clients All Requirements Is Our Main Aim.',
    gradient: 'from-[#A97C50]/90 to-[#fff0]/0',
    textColor: 'text-white',
  },
  {
    icon: (
      // Delivery/basket icon (placeholder SVG)
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="19" stroke="#7B3F2C" strokeWidth="2" fill="#fff" />
        <g stroke="#7B3F2C" strokeWidth="2">
          <rect x="12" y="18" width="16" height="8" rx="2" />
          <path d="M16 18v-4a4 4 0 0 1 8 0v4" />
          <circle cx="16" cy="28" r="1" />
          <circle cx="24" cy="28" r="1" />
        </g>
      </svg>
    ),
    text: 'Delivery On Time.',
    gradient: 'from-[#7B3F2C]/90 to-[#fff0]/0',
    textColor: 'text-white',
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 px-3 sm:px-4 md:px-8">
        {/* Left: Features */}
        <div className="flex-1 w-full flex flex-col gap-8 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 tracking-wide flex items-center gap-2">
            WHY CHOOSE US <span className="block w-10 sm:w-12 h-1 bg-gray-300 rounded ml-2" />
          </h2>
          <div className="flex flex-col gap-4 sm:gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 sm:gap-4`}
              >
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div
                  className={`flex-1 rounded-l-full h-14 sm:h-16 flex items-center pl-4 sm:pl-8 text-base sm:text-lg font-medium ${feature.textColor} bg-gradient-to-r ${feature.gradient}`}
                  style={{ minWidth: 0 }}
                >
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center w-full mb-8 md:mb-0 order-1 md:order-2">
          <Image
            src="/choose/seed.png"
            alt="Spices"
            width={500}
            height={350}
            className="object-contain max-w-[90vw] h-auto rounded-lg "
            priority
          />
        </div>
      </div>
    </section>
  );
}
