import Image from 'next/image';

export default function Organic() {
  return (
    <section id="why-us" className="bg-[#fef5f5] py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end max-w-6xl mx-auto why-us pb-20">
        {/* Right Side Content */}
        <div className="flex flex-col gap-4 order-2 md:order-none">
          <p className="text-xs text-[#03a66b] font-semibold">Why Choose us?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">We do not buy from the<br />open market & traders.</h2>
          <p className="text-gray-600">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry&apos;s standard  the 1500s, when an unknown</p>

          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-4 bg-[#e4f7ef] w-fit rounded-full px-6 py-3">
              <Image src="/vercel.svg" alt="Ring Icon" width={32} height={32} unoptimized />
              <p className="font-bold text-[#03a66b] leading-tight">100% Natural Product</p>
            </div>
            <p className="max-w-[41ch] ml-12 py-2 text-gray-600">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
            <div className="flex items-center gap-4 bg-[#e4f7ef] w-fit rounded-full px-6 py-3">
              <Image src="/vercel.svg" alt="Ring Icon" width={32} height={32} unoptimized />
              <p className="font-bold text-[#03a66b] leading-tight">Increases resistance</p>
            </div>
            <p className="max-w-[41ch] ml-12 py-2 text-gray-600">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
          </div>
        </div>
        {/* Left Side Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-xs md:max-w-md">
            <Image 
              src="/img/why-us-img-right.jpg" 
              alt="Why Us Right" 
              width={400} 
              height={500} 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Us Details Boxes */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mt-10">
        {/* Box 1 */}
        <div className="bg-white flex flex-col items-center p-6 rounded-2xl text-center flex-1 min-w-[200px] max-w-xs shadow">
          <Image src="/vercel.svg" alt="Return Policy" width={40} height={40} unoptimized />
          <p className="font-extrabold text-[#03a66b] text-lg mt-4 mb-2">Return Policy</p>
          <p className="text-gray-600">Simply dummy text of the printintypesetting industry.</p>
        </div>
        {/* Box 2 */}
        <div className="bg-white flex flex-col items-center p-6 rounded-2xl text-center flex-1 min-w-[200px] max-w-xs shadow">
          <Image src="/vercel.svg" alt="100% Fresh" width={40} height={40} unoptimized />
          <p className="font-extrabold text-[#03a66b] text-lg mt-4 mb-2">100% Fresh</p>
          <p className="text-gray-600">Simply dummy text of the printintypesetting industry.</p>
        </div>
        {/* Box 3 */}
        <div className="bg-white flex flex-col items-center p-6 rounded-2xl text-center flex-1 min-w-[200px] max-w-xs shadow">
          <Image src="/vercel.svg" alt="Support 24/7" width={40} height={40} unoptimized />
          <p className="font-extrabold text-[#03a66b] text-lg mt-4 mb-2">Support 24/7</p>
          <p className="text-gray-600">Simply dummy text of the printintypesetting industry.</p>
        </div>
        {/* Box 4 */}
        <div className="bg-white flex flex-col items-center p-6 rounded-2xl text-center flex-1 min-w-[200px] max-w-xs shadow">
          <Image src="/vercel.svg" alt="Secured Payment" width={40} height={40} unoptimized />
          <p className="font-extrabold text-[#03a66b] text-lg mt-4 mb-2">Secured Payment</p>
          <p className="text-gray-600">Simply dummy text of the printintypesetting industry.</p>
        </div>
      </div>
    </section>
  );
}
