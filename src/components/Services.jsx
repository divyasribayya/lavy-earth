import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/about/spice.png" // Replace with your actual spices image path
              alt="Spices Bowls"
              width={500}
              height={350}
              className="w-full h-auto object-cover rounded-lg "
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-black font-bold text-lg mb-2 flex items-center gap-2 justify-center md:justify-start">
              ABOUT US <span className="w-10 h-0.5 bg-gray-400 inline-block align-middle"></span>
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#FFA800] mb-4">
              Global Spices Exporter & Supplier
            </h2>
            <p className="text-black font-bold mb-2">
              Spices Pvt. Ltd.
              <span className="font-normal"> Is A Leading Manufacturer, Exporter And Supplier Of SPICES AND OIL SEEDS Such As CUMIN SEEDS, SESAME SEEDS, FENNEL SEEDS, PEANUTS, And GROUNDNUTS Etc.</span>
            </p>
            <p className="text-black mb-6">
              Based In The Spice City Of India - UNJHA, We At Sheth Overseas Directly Procure Spices And Oil Seeds From Farmer And Process At Our Manufacturing Unit, Which Results Into Pure And Clean Quality Of Final Products. We Always Deliver More Than Expected.
            </p>
            <Link
              href="#"
              className="inline-block bg-[#FFA800] text-white px-10 py-4 rounded-md font-semibold text-lg shadow-md hover:bg-[#e09c00] transition"
            >
              KNOW MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
