"use client";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1rem;
  background: #f4f2f3;
  border-radius: 1rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: #64766a;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #94a7ae;
  margin-bottom: 2rem;
`;

export default function ContactSection() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-full h-64 md:h-80 flex items-center justify-center bg-cover bg-center mb-12" style={{ backgroundImage: 'url(/contact-page/Banner.png)' }}>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">Contact</h2>
      </div>
      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Info */}
        <div>
          <div className="mb-2 text-[#94a7ae] font-semibold tracking-widest uppercase text-sm">Get Started</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#10403C] leading-tight mb-4">
            Secure Your Coverage<br />
            Today with <span className="text-[#94a7ae]">lavy earth foods </span>
          </h1>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-[#10403C]">Contact Info</h2>
            <div className="flex items-start gap-4 mb-6">
              <span className="bg-[#94a7ae] rounded-lg p-3 flex items-center justify-center">
                <Image src="/img/Vegan-icon.png" alt="Phone" width={32} height={32} />
              </span>
              <div>
                <div className="font-bold text-[#10403C]">Phone Number</div>
                <div className="text-[#222]">+91 9515075499</div>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <span className="bg-[#94a7ae] rounded-lg p-3 flex items-center justify-center">
                <Image src="/img/icon.png" alt="Address" width={32} height={32} />
              </span>
              <div>
                <div className="font-bold text-[#10403C]">Address</div>
                <div className="text-[#222] max-w-xs">P. Gannavaram, L. Gannavaram Village,
                East Godavari District, Andhra Pradesh - 533240.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-[#94a7ae] rounded-lg p-3 flex items-center justify-center">
                <Image src="/img/Mailbox-icon.png" alt="Email" width={32} height={32} />
              </span>
              <div>
                <div className="font-bold text-[#10403C]">Email</div>
                <div className="text-[#222]">lavyearthfoods@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side: Form */}
        <div>
          <form className="bg-[#FEE7DF] rounded-2xl shadow p-8 w-full max-w-lg ml-auto">
            <div className="mb-4">
              <label className="block font-semibold mb-1 text-[#10403C]" htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="Enter your name" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94a7ae]" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1 text-[#10403C]" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94a7ae]" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1 text-[#10403C]" htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94a7ae]" />
            </div>
            <div className="mb-6">
              <label className="block font-semibold mb-1 text-[#10403C]" htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Enter your message" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94a7ae] resize-none" />
            </div>
            <button type="submit" className="bg-[#94a7ae] text-white font-semibold px-8 py-2 rounded-full text-lg hover:bg-[#d94e1f] transition">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
