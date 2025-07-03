import Image from 'next/image';

export default function Alternative() {
  return (
    <section id="organic" className="py-16 px-4 bg-white">
      {/* Title Section */}
      <div className="flex flex-col gap-8 pb-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Organic Store Services</h2>
        <p className="text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <p className="text-gray-600">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
      </div>

      {/* Organic Grid */}
      <div className="flex flex-col gap-10 pb-20 max-w-5xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch justify-center">
          <div className="flex gap-10 items-stretch justify-center flex-1">
            <Image src="/img/about-left-img.png" alt="Organic Grid 1" width={180} height={180} className="rounded-xl object-cover" />
            <span className="bg-[#fef5f5] flex flex-col justify-center max-w-xl rounded-xl px-8 py-6">
              <p className="font-bold text-[#03a66b] text-xl mb-2">Why Organic</p>
              <p className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
            </span>
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch justify-center">
          <div className="flex gap-10 items-stretch justify-center flex-1 md:flex-row-reverse">
            <Image src="/img/why-us-img-right.jpg" alt="Organic Grid 2" width={180} height={180} className="rounded-xl object-cover" />
            <span className="bg-[#fef5f5] flex flex-col justify-center max-w-xl rounded-xl px-8 py-6">
              <p className="font-bold text-[#03a66b] text-xl mb-2">Speciality Produce</p>
              <p className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
            </span>
          </div>
        </div>
      </div>

      {/* We farm your land Section */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">We farm your land</h2>
        <p className="text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          <div className="flex items-center gap-6 bg-[#fef5f5] px-8 py-4 rounded-full w-fit">
            <span className="bg-[#03a66b] text-white font-bold text-lg flex items-center justify-center rounded-full w-12 h-12">01</span>
            <span className="font-semibold text-[#03a66b] text-lg">Best quality support</span>
          </div>
          <div className="flex items-center gap-6 bg-[#fef5f5] px-8 py-4 rounded-full w-fit">
            <span className="bg-[#03a66b] text-white font-bold text-lg flex items-center justify-center rounded-full w-12 h-12">02</span>
            <span className="font-semibold text-[#03a66b] text-lg">Money back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
