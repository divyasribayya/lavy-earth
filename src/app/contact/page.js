"use client";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Info */}
        <div className="">
          <h2 className="text-4xl font-bold text-[#FFA800] mb-4">Get in Touch</h2>
          <p className="text-base text-black mb-8 max-w-md">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-[#FFF3E1] rounded-full p-4 flex items-center justify-center">
              <Image src="/contact-page/call-icon.svg" alt="Phone" width={32} height={32} />
            </span>
            <span className="text-lg text-black">+91 99999 99999</span>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-[#FFF3E1] rounded-full p-4 flex items-center justify-center">
              <Image src="/contact-page/contact-icon.svg" alt="Email" width={32} height={32} />
            </span>
            <span className="text-lg text-black">info@info.com.au</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-[#FFF3E1] rounded-full p-4 flex items-center justify-center">
              <Image src="/contact-page/locqation-Icon.png" alt="Location" width={32} height={32} />
            </span>
            <span className="text-lg text-black">
              Near, Block &quot;E&quot; , Shop No. 448 Sumel 11, BAPS Cir,<br />
              Shahibag, Ahmedabad, Gujarat 380004
            </span>
          </div>
        </div>
        {/* Right Side: Form */}
        <div className="">
          <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[#FFA800] font-semibold mb-1" htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" placeholder="Enter First Name" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA800] placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-[#FFA800] font-semibold mb-1" htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" placeholder="Enter Last Name" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA800] placeholder-gray-400" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[#FFA800] font-semibold mb-1" htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="Enter Email Address" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA800] placeholder-gray-400" />
            </div>
            <div className="mb-6">
              <label className="block text-[#FFA800] font-semibold mb-1" htmlFor="message">Message..</label>
              <textarea id="message" name="message" rows={5} placeholder="Type Your Message" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA800] placeholder-gray-400 resize-none" />
            </div>
            <button type="submit" className="w-full bg-[#FFA800] text-white font-semibold py-4 rounded shadow text-lg hover:bg-[#e69500] transition">Send Message..</button>
          </form>
        </div>
      </div>
    </div>
  );
}
