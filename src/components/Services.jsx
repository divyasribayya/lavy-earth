import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f9f8f8] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Graphic Image */}
          <div className="flex justify-center">
            <Image
              src="/img/about-bg.png"
              alt="About background"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-[#7EB693] font-semibold text-sm uppercase tracking-wider mb-2">
              About us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#274c5b] mb-4">
              We Believe in Working Accredited Farmers
            </h2>
            <p className="text-[#525C60] mb-6">
              Simply dummy text of the printing and typesetting industry.
              Lorem had ceased to been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>

            {/* About Boxes */}
            <div className="flex flex-col gap-6 my-8">
              {/* Box 1 */}
              <div className="flex items-center gap-6">
                <Image
                  src="/img/Vegan-icon.png"
                  alt="Vegan Icon"
                  width={50}
                  height={50}
                  className="bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-xl font-extrabold text-[#274c5b]">
                    Organic Foods Only
                  </h3>
                  <p className="text-[#525C60]">
                    Simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex items-center gap-6">
                <Image
                  src="/img/Mailbox-icon.png"
                  alt="Mailbox Icon"
                  width={50}
                  height={50}
                  className="bg-white p-2 rounded-md"
                />
                <div>
                  <h3 className="text-xl font-extrabold text-[#274c5b]">
                    Quality Standards
                  </h3>
                  <p className="text-[#525C60]">
                    Simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#274c5b] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#3d6a7c] transition"
            >
              Shop Now
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
