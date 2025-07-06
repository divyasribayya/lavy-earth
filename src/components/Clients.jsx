import Image from 'next/image';

const features = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto text-brown-900"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17l6-6 4 4 6-6" /></svg>
    ),
    title: 'Premium Quality Assurance',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto text-brown-900"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
    ),
    title: 'Automated Machinery',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto text-brown-900"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z" /></svg>
    ),
    title: 'Best Infrastructure',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto text-brown-900"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8v4l5-5-5-5v4a10 10 0 100 20v-4l-5 5 5 5v-4a8 8 0 01-8-8z" /></svg>
    ),
    title: 'Satisfied Customers',
  },
];

export default function Clients() {
  return (
    <section className="w-full bg-[#3B1200] py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text and Features */}
        <div className="w-full md:w-1/2 text-white mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            We Are Trusted By More Than 
            <span className="text-4xl md:text-5xl font-bold">5k Clients.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white bg-opacity-10 rounded-xl p-6 shadow-md">
                <div className="bg-white rounded-lg w-20 h-20 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <div className="text-center text-lg font-medium text-white">
                  {feature.title.split(' ').map((word, i, arr) =>
                    i === arr.length - 1 ? word : word + ' '
                  ).reduce((prev, curr) => [prev, <br key={curr} />, curr])}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative h-[400px] w-[300px] md:h-[500px] md:w-[400px]">
            <Image
              src="/client/man.png"
              alt="Happy client giving thumbs up"
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
